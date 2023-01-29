// Reactでのイベントの作成

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <button onClick={onClickButton}>Click me!</button>
    </>
  );
};

// Reactでのstyleの扱い方

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{color: 'red'}}>Hello!</h1> // {{}} 外側はjavascriptを書く宣言、内側はjavascriptのオブジェクト

      <button onClick={onClickButton}>Click me!</button>
    </>
  );
};

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  };
  return (
    <>
      <h1 style={{color: 'red'}}>Hello!</h1> 
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClickButton}>Click me!</button>
    </>
  );
};

// propsの使い方
// props = componentに渡す引数のようなもの
// 色と文章をpropsで受け取る
// componentsフォルダを作成してその中に入れていく
// components/ColorfulMessage.jsx
// <></>で括ることでchildrenとして渡す文章を設定する

// App.jss
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm doing good!</ColorfulMessage>

      <button onClick={onClickButton}>Click me!</button>
    </>
  );
};

// ColorfulMessage.jsx
import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
// 分割代入を使う
// const { color, children } = props;
// color
// {children}


//PropsとState
// State = 各componentが持つ、可変の状態。Stateが変更されると再レンダリングされる。
// Propsでは文字列などを渡していた。Stateでは様々なデータを持たせられる

// num:動的に変化する変数。stateの変数名。
// setNum: numを更新していく変数
// ()は初期値。

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm doing good!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up!!</button>
      <p>{num}</p>
    </>
  );
};


// 再レンダリングと副作用、useEffect

// 表示・非表示の状態を持たせたい=useState
// faceShowFlag でレンダリングの判定をしていく
// 現在と反対の値を返したい　[ , ] の二つの値を使って切り替える
// stateが変わると再レンダリングされる

onst App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState();
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  };


  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm doing good!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up!!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(⌒▽⌒)</p>}
      
    </>
  );
};
