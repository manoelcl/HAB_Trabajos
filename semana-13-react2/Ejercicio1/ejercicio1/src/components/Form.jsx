import { useState } from "react";

function Form({ send }) {
  const SIZE_LIMIT = 100;
  const [text, setText] = useState("");

  const inputHandler = (e) => setText(e.target.value);
  const sendHandler = (e) => {
    e.preventDefault();
    if (!text) return;
    send(text);
    setText("");
  };

  return (
    <form>
      <input
        value={text}
        maxLength={SIZE_LIMIT}
        type="text"
        onChange={inputHandler}
        autoFocus
      />
      <button onClick={sendHandler}>send</button>
    </form>
  );
}

export default Form;
