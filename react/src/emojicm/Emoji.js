import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

export default function EmojiInput() {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div>
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
    <p>
        <span className="textt">지금 가장 많이 담는 특가</span>
    </p>
    </div>
  );
}