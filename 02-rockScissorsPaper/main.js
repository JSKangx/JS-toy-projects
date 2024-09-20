"use strict";

const startGame = function () {
  let answer = prompt("가위, 바위, 보 중 하나를 입력하세요.");
  let myAnswer = "";
  let randomNum = Math.random() * 3;
  if (randomNum > 2) {
    myAnswer = "rock";
  } else if (randomNum > 1) {
    myAnswer = "scissors";
  } else {
    myAnswer = "paper";
  }
  console.log(myAnswer);
  let buttonNode = document.querySelector(".btn-start");
  console.log(answer);
  if (answer === null || answer.trim().length === 0) {
    buttonNode.innerText = "아무것도 입력하지 않으셨습니다. 다시 도전하시겠습니까?";
  }
};
