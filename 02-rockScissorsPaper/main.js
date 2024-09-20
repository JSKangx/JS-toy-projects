"use strict";
let resultNode = document.getElementById("result");

const startGame = function () {
  let userAnswer = prompt("가위, 바위, 보 중 하나를 입력하세요.");
  let myAnswer = "";
  let randomNum = Math.random() * 3;
  if (randomNum > 2) {
    myAnswer = "바위";
  } else if (randomNum > 1) {
    myAnswer = "가위";
  } else {
    myAnswer = "보";
  }
  console.log(myAnswer);
  let buttonNode = document.querySelector(".btn-start");
  console.log(userAnswer);
  if (userAnswer === null || userAnswer.trim().length === 0) {
    buttonNode.innerText = "아무것도 입력하지 않으셨습니다. 다시 도전하시겠습니까?";
  } else if (userAnswer == myAnswer) {
    resultNode.innerHTML = `당신 : ${userAnswer} <br /> 컴퓨터 : ${myAnswer} <br /> 비겼습니다.`;
    buttonNode.innerText = "다시 도전하시겠습니까?";
  }
};
