import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

interface NavProps {
  suffleDeck: () => void;
  resetDeck: () => void;
  hint: () => void;
}
interface voidFuc {
  (): void;
}
const Nav: React.FC<NavProps> = ({ suffleDeck, resetDeck, hint }) => {
  const [count, setCount] = useState(5);
  const [showReset, setShowReset] = useState(false);
  const [time, setTime] = useState({
    min: 10,
    sec: 0,
  });
  const hintHandler = () => {
    count > 0 && setCount((prev) => prev - 1);
    hint();
  };
  const resetHandler: voidFuc = () => {
    setCount(5);
    resetDeck();
  };

  return (
    <Form>
      <div>
        <button onClick={suffleDeck} type="button">
          게임 시작
        </button>
        <button onClick={resetHandler} type="button">
          리셋
        </button>
      </div>
      <Hint>
        <span>{count}</span>
        <button onClick={hintHandler} type="button">
          힌트
        </button>
      </Hint>
      <div>
        {time.min} : {time.sec}
      </div>
    </Form>
  );
};

export default Nav;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 50px;
`;

const Hint = styled.div`
  gap: 50px;
`;
