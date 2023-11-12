import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMesseage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onclickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です！" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onclickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😃</p>}
    </>
  );
};

export default App;
