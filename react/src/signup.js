import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  flex: 0 0 120px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  flex: 0 0 100px;
  padding: 10px;
  margin-left: 10px;
  background-color: #fff;
  color: #5f0080;
  border: 1px solid #5f0080;
  border-radius: 4px;
  cursor: pointer;
  fontsize: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  flex: 2;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FooterText = styled.p`
  text-align: center;
  color: #999;
  font-size: 12px;
`;

function SignUp() {
  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <FormGroup>
          <Label>아이디*</Label>
          <Input type="text" placeholder="아이디를 입력해주세요" />
          <Button>중복확인</Button>
        </FormGroup>
        <FormGroup>
          <Label>비밀번호*</Label>
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </FormGroup>
        <FormGroup>
          <Label>비밀번호 확인*</Label>
          <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" />
        </FormGroup>
        <FormGroup>
          <Label>이름*</Label>
          <Input type="text" placeholder="이름을 입력해 주세요" />
        </FormGroup>
        <FormGroup>
          <Label>이메일*</Label>
          <Input type="email" placeholder="예: marketkurly@kurly.com" />
          <Button>중복확인</Button>
        </FormGroup>
        <FormGroup>
          <Label>휴대폰*</Label>
          <Input type="text" placeholder="숫자만 입력해주세요" />
          <Button>인증번호 받기</Button>
        </FormGroup>
        <FormGroup>
          <Label>주소*</Label>
          <Input type="text" placeholder="주소를 입력해주세요" />
          <Button>주소 검색</Button>
        </FormGroup>
        <FormGroup>
          <Label>성별</Label>
          <RadioGroup>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="male" /> 남자
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="female" /> 여자
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="none" /> 선택안함
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>생년월일</Label>
          <Input type="text" placeholder="YYYY" style={{ marginRight: '10px', flex: '1' }} />
          <Input type="text" placeholder="MM" style={{ marginRight: '10px', flex: '1' }} />
          <Input type="text" placeholder="DD" style={{ flex: '1' }} />
        </FormGroup>
        <FormGroup>
          <Label>추가입력 사항</Label>
          <Select>
            <option value="">선택안함</option>
            <option value="friend">친구초대 추천인 아이디</option>
            <option value="event">참여 이벤트명</option>
          </Select>
        </FormGroup>
      </Form>
      <FooterText>* 필수입력사항</FooterText>
    </Container>
  );
}

export default SignUp;
