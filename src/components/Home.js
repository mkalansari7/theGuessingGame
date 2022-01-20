import React, { useState } from "react";

const Home = () => {
  const [choosingNum, setChoosingNum] = useState(0);
  const [answerNumber, setAnswerNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [attemptNum, setAttemptNum] = useState(4);
  const typingNum = (event) => {
    const savedValue = event.target.value;
    setChoosingNum(savedValue);
  };

  console.log(answerNumber);

  const checkAnswer = () => {
    if (answerNumber == choosingNum) {
      alert("WOHOO you guessed the correct number");
      window.location.reload();
    } else if (answerNumber > choosingNum) {
      //   if (answerNumber <= choosingNum + 10) {
      //     document.getElementById("answer").innerHTML =
      //       "your number is lower than the correct number but too close";
      //   } else {
      document.getElementById("answer").innerHTML =
        "your number is lower than the correct number";
      //   }
      attempt();
    } else {
      document.getElementById("answer").innerHTML =
        "your number is HIGHER than the correct number";
      attempt();
    }
    document.getElementById(
      "msg"
    ).innerHTML = `you have ${attemptNum} attempts left`;
  };

  const attempt = () => {
    if (attemptNum > 0) {
      setAttemptNum(attemptNum - 1);
    } else {
      alert(`you have lost the game the number was ${answerNumber}`);
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <h1 className="headStyle">Welcome to</h1>
      <img
        className="imgStyle"
        src="https://i.ytimg.com/vi/E-Voff821tE/maxresdefault.jpg"
        alt="Guessing Game"
      />
      <br />
      <div>
        <input
          className="inputStyle"
          type="number"
          onChange={typingNum}
          placeholder="Enter a number from 1-100"
        />
        <br />
        <button className="buttonStyle" onClick={checkAnswer}>
          submit
        </button>
      </div>
      <div id="answer"></div>
      <div id="msg"></div>
      <div>{/* <h1>{answerNumber}</h1> */}</div>
    </div>
  );
};

export default Home;
