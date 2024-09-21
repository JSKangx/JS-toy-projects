"use strict";
let resultNode = document.getElementById("result");

const startGame = function () {
  // 유저에게 가위, 바위, 보를 입력받아 그 입력을 변수에 할당.
  let userAnswer = prompt("가위, 바위, 보 중 하나를 입력하세요.");

  // 컴퓨터 선택의 초기값
  let myAnswer = "";
  // 컴퓨터가 난수로 가위/바위/보를 결정
  let randomNum = Math.random() * 3;
  if (randomNum > 2) {
    myAnswer = "바위";
  } else if (randomNum > 1) {
    myAnswer = "가위";
  } else {
    myAnswer = "보";
  }

  console.log(`컴퓨터: ${myAnswer}`);
  console.log(`유저: ${userAnswer}`);
  // 게임 시작 버튼노드에 접근하여 변수에 할당.
  let buttonNode = document.querySelector(".btn-start");

  // 조건 1. 취소를 누르거나 아무것도 입력하지 않을 때
  if (userAnswer === null || userAnswer.trim().length === 0) {
    buttonNode.innerText = "아무것도 입력하지 않으셨습니다. 다시 도전하시겠습니까?";
  }
  // 조건 2. 유저와 컴퓨터가 낸 답이 같을 때
  else if (userAnswer == myAnswer) {
    resultNode.innerHTML = `당신 : ${userAnswer} <br /> 컴퓨터 : ${myAnswer} <br /> 비겼습니다.`;
    buttonNode.innerText = "다시 도전하시겠습니까?";
  }
  // 조건 3. 컴퓨터가 이겼을 때
  else if ((myAnswer === "가위" && userAnswer === "보") || (myAnswer === "바위" && userAnswer === "가위") || (myAnswer === "보" && userAnswer === "바위")) {
    resultNode.innerHTML = `당신 : ${userAnswer} <br /> 컴퓨터 : ${myAnswer} <br /> 컴퓨터가 이겼습니다.`;
    buttonNode.innerText = "다시 도전하시겠습니까?";
  }
  // 조건 4. 유저가 이겼을 때
  else if ((myAnswer === "보" && userAnswer === "가위") || (myAnswer === "가위" && userAnswer === "바위") || (myAnswer === "바위" && userAnswer === "보")) {
    resultNode.innerHTML = `당신 : ${userAnswer} <br /> 컴퓨터 : ${myAnswer} <br /> 당신이 이겼습니다. 축하드립니다.`;
    buttonNode.innerText = "다시 도전하시겠습니까?";
  }
};
