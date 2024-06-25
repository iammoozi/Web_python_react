from fastapi import FastAPI, Form, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import shutil
from typing import Optional
from datetime import datetime
import shutil
import os
import pymysql
from pathlib import Path

app = FastAPI()
now = datetime.now()

UPLOAD_DIRECTORY = Path("app/upload")
app.mount("/upload", StaticFiles(directory=UPLOAD_DIRECTORY), name="upload")


# CORS 설정
origins = ["*"]  # 모든 출처 허용

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def db_conn():
    return pymysql.connect(
        host='10.10.0.100',
        port=3306,
        user='team02',
        password='1234',
        database='team02',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor,
    )

@app.get("/")
def read_root():
    return {"Result": "team02입니다"}

@app.post("/signup") 
async def register(
    email: str = Form(..., description="아이디로 이메일을 사용"), 
    password: str = Form(...),
    name: str = Form(...),
    address: str = Form(...),
    phonenum: str = Form(...),
):
    """
    회원가입
    - email : 아이디로 사용
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            sql = '''
                INSERT INTO user (user_email, user_password, user_name, user_address, user_phonenum, createdat, authority) 
                VALUES (%s, UPPER(SHA1(UNHEX(SHA1(%s)))), %s, %s, %s, %s, %s)
            '''
            cursor.execute(sql, (
                email, 
                password, 
                name,
                address,
                phonenum,
                datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'user'  # 기본값으로 'user'를 직접 설정
            ))
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "회원가입이 완료되었습니다."}

@app.post("/check_email")
async def check_email(email: str = Form(...)):
    db = db_conn()
    try:
        with db.cursor() as cursor:
            cursor.execute("SELECT COUNT(*) as cnt FROM user WHERE user_email = %s", (email,))
            result = cursor.fetchone()
            if result['cnt'] > 0:
                return {"exists": True}
            else:
                return {"exists": False}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close() 

@app.post("/login")
async def login(
    email: str = Form(...), 
    password: str = Form(...)
):
    '''
    로그인
    '''
    db = db_conn()
    try:
        with db.cursor() as cursor:
            sql = '''
                SELECT user_name, authority FROM user 
                WHERE user_email = %s AND user_password = UPPER(SHA1(UNHEX(SHA1(%s))))
            '''
            cursor.execute(sql, (email, password))
            row = cursor.fetchone()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

    if row:
        return {"success": True, "name": row["user_name"], "authority": row["authority"]}  
    else:
        return {"success": False, "message": "이메일 또는 비밀번호가 잘못되었습니다."}

@app.post("/update_user")
async def update_user(
    email: str = Form(...), 
    password: Optional[str] = Form(None),
    name: Optional[str] = Form(None),
    address: Optional[str] = Form(None),
    phonenum: Optional[str] = Form(None)
):
    """
    회원 정보 수정
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            # 현재 데이터를 가져옵니다
            cursor.execute("SELECT * FROM user WHERE user_email = %s", (email,))
            user = cursor.fetchone()
            if not user:
                raise HTTPException(status_code=404, detail="User not found")

            # 새로운 데이터로 업데이트합니다
            sql = '''
                UPDATE user
                SET 
                    user_password = COALESCE(UPPER(SHA1(UNHEX(SHA1(%s)))), user_password),
                    user_name = COALESCE(%s, user_name),
                    user_address = COALESCE(%s, user_address),
                    user_phonenum = COALESCE(%s, user_phonenum)
                WHERE user_email = %s
            '''
            cursor.execute(sql, (
                password,
                name,
                address,
                phonenum,
                email
            ))
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "회원 정보가 수정되었습니다."}

@app.delete("/delete_user")
async def delete_user(email: str = Form(...)):
    """
    회원 정보 삭제
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            # 현재 사용자가 존재하는지 확인합니다
            cursor.execute("SELECT * FROM user WHERE user_email = %s", (email,))
            user = cursor.fetchone()
            if not user:
                raise HTTPException(status_code=404, detail="User not found")

            # 사용자 삭제
            sql = '''
                DELETE FROM user WHERE user_email = %s
            '''
            cursor.execute(sql, (email,))
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "회원 정보가 삭제되었습니다."}

@app.get("/api/products")
def get_products():
    conn = db_conn()
    try:
        with conn.cursor() as cursor:
            cursor.execute("""
                SELECT DISTINCT 
                    p.product_id, p.product_name, p.product_price, p.description, 
                    p.product_image, p.quantity, c.category_name 
                FROM 
                    product p 
                LEFT JOIN 
                    categoryforproduct cp ON p.product_id = cp.product_id 
                LEFT JOIN 
                    category c ON cp.category_id = c.category_id
            """)
            products = cursor.fetchall()
        return products
    finally:
        conn.close()

@app.post("/add_product")
async def add_product(
    product_name: str = Form(...), 
    product_price: int = Form(...), 
    description: str = Form(...), 
    product_image: UploadFile = File(...), 
    quantity: int = Form(...),
    categories: str = Form(...)
):
    image_path = UPLOAD_DIRECTORY / product_image.filename
    with image_path.open("wb") as buffer:
        shutil.copyfileobj(product_image.file, buffer)
    
    conn = db_conn()
    try:
        with conn.cursor() as cursor:
            cursor.execute("INSERT INTO product (product_name, product_price, description, product_image, quantity) VALUES (%s, %s, %s, %s, %s)", 
                           (product_name, product_price, description, f"/upload/{product_image.filename}", quantity))
            product_id = cursor.lastrowid
            
            category_ids = categories.split(',')
            for category_id in category_ids:
                cursor.execute("INSERT INTO categoryforproduct (product_id, category_id) VALUES (%s, %s)", (product_id, int(category_id)))

        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()
    
    return {"message": "Product added successfully"}

@app.delete("/products/{product_id}")
def delete_product(product_id: int):
    conn = db_conn()
    try:
        with conn.cursor() as cursor:
            cursor.execute("DELETE FROM product WHERE product_id = %s", (product_id,))
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="Product not found")
            cursor.execute("DELETE FROM categoryforproduct WHERE product_id = %s", (product_id,))
        conn.commit()
    finally:
        conn.close()
    return {"message": "Product deleted successfully"}

@app.post("/add_category")
async def add_category(category_name: str = Form(...)):
    """
    카테고리 추가
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            sql = '''
                INSERT INTO category (category_name)
                VALUES (%s)
            '''
            cursor.execute(sql, (category_name,))
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "카테고리가 추가되었습니다."}

@app.get("/api/categories")
def get_categories():
    conn = db_conn()
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM category")
            categories = cursor.fetchall()
        return categories
    finally:
        conn.close()

@app.put("/update_category/{category_id}")
async def update_category(category_id: int, category_name: str = Form(...)):
    """
    카테고리 수정
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            sql = '''
                UPDATE category
                SET category_name = %s
                WHERE category_id = %s
            '''
            cursor.execute(sql, (category_name, category_id))
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="카테고리를 찾을 수 없습니다.")
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "카테고리가 수정되었습니다."}

@app.delete("/delete_category/{category_id}")
async def delete_category(category_id: int):
    """
    카테고리 삭제
    """
    db = db_conn()
    try:
        with db.cursor() as cursor:
            sql = '''
                DELETE FROM category
                WHERE category_id = %s
            '''
            cursor.execute(sql, (category_id,))
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="카테고리를 찾을 수 없습니다.")
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
    
    return {"success": "카테고리가 삭제되었습니다."}

@app.post("/cart/{user_id}/add")
async def add_to_cart(user_id: int, product_id: int, quantity: int):
    db = db_conn()
    try:
        with db.cursor() as cursor:
            # 장바구니에 이미 해당 상품이 있는지 확인
            cursor.execute("SELECT cart_id FROM cart WHERE user_id = %s AND product_id = %s", (user_id, product_id))
            result = cursor.fetchone()
            if result:
                # 이미 존재하는 상품이면 수량을 업데이트
                cart_id = result['cart_id']
                cursor.execute("UPDATE cart SET quantity = %s WHERE cart_id = %s", (quantity, cart_id))
            else:
                # 존재하지 않는 상품이면 새로 추가
                cursor.execute("INSERT INTO cart (user_id, product_id, quantity) VALUES (%s, %s, %s)", (user_id, product_id, quantity))

        db.commit()
        return {"message": "Item added to cart"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/cart/{user_id}")
async def get_cart(user_id: int):
    db = db_conn()
    try:
        with db.cursor() as cursor:
            cursor.execute("""
                SELECT c.cart_id, c.product_id, c.quantity, p.product_name, p.product_price, p.description, p.product_image 
                FROM cart c
                JOIN product p ON c.product_id = p.product_id
                WHERE c.user_id = %s
            """, (user_id,))
            cart_items = cursor.fetchall()
            return cart_items
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.delete("/cart/{user_id}/remove/{cart_id}")
async def remove_from_cart(user_id: int, cart_id: int):
    db = db_conn()
    try:
        with db.cursor() as cursor:
            cursor.execute("DELETE FROM cart WHERE user_id = %s AND cart_id = %s", (user_id, cart_id))
        db.commit()
        return {"message": "Item removed from cart"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
