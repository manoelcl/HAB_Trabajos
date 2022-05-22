import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const add = () => setCounter(counter + 1);
  const subtract = () => setCounter(counter && counter - 1);
  return { counter, add, subtract };
};

export default useCounter;
