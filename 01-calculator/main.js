"use strict";

// DOM node 객체 얻기
let resultNode = document.querySelector(".result");
let errorMsg = document.querySelector(".errorMSG");

/*
  아래 상태 관리 변수는 여러 함수에서 참조되어야 하기에 전역변수로 선언하였다.
  (1) 결과가 출력되었다면(즉, equalNdoe가 클릭되었다면, true로 바꿈)
  (2) 숫자 혹은 연산자를 누를 때마다(다시 계산을 시작한다는 뜻) 상태 관리 변수를 false로 바꿈.
  (3) 변수가 true라면 숫자를 입력할 때 계산대를 초기화하고 새로 입력한 숫자로 시작하게 함.
  (4) 연산자는 언제든 원래 수식에 추가되게 함.
*/
let isResultDisplayed = false;

// 배열의 구조분해 할당을 통한 숫자 DOM Node 획득.
const [oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode, zeroNode] = [
  document.querySelector(".one"),
  document.querySelector(".two"),
  document.querySelector(".three"),
  document.querySelector(".four"),
  document.querySelector(".five"),
  document.querySelector(".six"),
  document.querySelector(".seven"),
  document.querySelector(".eight"),
  document.querySelector(".nine"),
  document.querySelector(".zero"),
];

// 배열의 구조분해 할당을 통한 기호 DOM Node 획득
const [leftParentNode, rightParentNode, percentNode, acNode, divideNode, timesNode, minusNode, plusNode, dotNode, equalNode] = [
  document.querySelector(".left-parent"),
  document.querySelector(".right-parent"),
  document.querySelector(".percent"),
  document.querySelector(".ac"),
  document.querySelector(".divide"),
  document.querySelector(".times"),
  document.querySelector(".minus"),
  document.querySelector(".plus"),
  document.querySelector(".dot"),
  document.querySelector(".equal"),
];

// 사칙 연산자, %을 계산대에 올려주는 함수
const getOperator = (e) => {
  errorMsg.innerHTML = "";
  let regExp = /\d/; // 정규 표현식 : 숫자를 포함하는지
  // 만약 계산대의 수식에 숫자가 포함되어 있다면

  // 마지막 입력이 연산자인지 확인하기 위해 연산자 배열 선언.
  const operators = ["+", "-", "*", "/", "%"];

  // 결과 출력 상태관리 변수
  isResultDisplayed = false;
  let result = resultNode.innerHTML;
  /*
    아래 두 조건을 모두 만족할 때에만 연산자 버튼 작동
    (1) 결과에 숫자가 포함되어 있다면 연산자 버튼이 작동
    (2) 결과의 마지막 입력이 연산자가 아니라면 연산자 버튼 작동
  */
  if (regExp.test(result) && !operators.includes(result.slice(-1))) {
    resultNode.innerHTML += e.target.innerHTML;
  }
};

// 숫자를 계산대에 올려놓는 함수
const getNum = (e) => {
  errorMsg.innerHTML = "";
  // 결과 출력 상태관리 변수에 따라 숫자를 눌렀을 때 실행되는 코드가 다름.
  // 결과가 출력이 되었다면

  if (isResultDisplayed) {
    // 숫자 버튼을 누를 때 아래 코드들 실행
    resultNode.innerHTML = ""; // 결과창을 빈창으로 바꾸고
    isResultDisplayed = false; // 상태관리 변수를 false로 변경
  }
  // 얻은 숫자를 계산대에 올려주고
  resultNode.innerHTML += e.target.innerHTML;
};

// 올려진 식을 계산해주는 함수
equalNode.addEventListener("click", () => {
  isResultDisplayed = true;
  console.log(isResultDisplayed);
  if (resultNode.innerHTML !== "") {
    try {
      resultNode.innerHTML = math.evaluate(resultNode.innerHTML);
    } catch (error) {
      resultNode.innerHTML = "";
      errorMsg.innerHTML = "계산될 수 없는 수식입니다. 다시 입력해주세요.";
    }
  }
});

// AC 버튼을 누르면 계산대를 리셋해주는 함수
acNode.addEventListener("click", () => {
  resultNode.innerHTML = 0;
});

// 여러 DOM 요소에 같은 이벤트 리스너를 추가하기 위해 숫자와 연산자 버튼에 대한 이벤트 리스너를 설정하는 함수를 정의해주었다.
const addEventListener = (nodes, handler) => {
  nodes.forEach((node) => node.addEventListener("click", handler));
};
/*
  (1) forEach 메서드를 이용해 nodes 배열에 있는 각 요소에 접근하여, 해당 요소에 addEventListener로 클릭 이벤트를 추가한다.
  (2) 각 요소가 클릭되면 지정된 handler가 호출된다.
*/

// 숫자 버튼과 연산자 버튼의 DOM 노드를 각각 배열로 묶어서 관리한다.
// 숫자 버튼과 연산자 버튼을 나눈 이유는, 두 개의 역할이 다르기 때문
const numberNodes = [oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode, zeroNode];
const operatorNodes = [percentNode, divideNode, timesNode, minusNode, plusNode, leftParentNode, rightParentNode, dotNode];

// 앞서 정의한 addEventListener 함수를 이용하여, 각각의 숫자버튼과 연산자 버튼에 이벤트 리스너를 추가한다.
addEventListener(numberNodes, getNum);
addEventListener(operatorNodes, getOperator);
