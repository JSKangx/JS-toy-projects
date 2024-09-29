"use strict";

let myForm = document.getElementById("myForm");
let list = document.getElementById("list");
let resetBtn = document.getElementById("reset");

myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지
  // 유저의 입력값에 접근하기
  let inputNode = document.getElementById("input");
  // 유저의 입력값을 '텍스트 노드'로 만들어 변수에 할당.
  // 이게 텍스트 노드여야지만 appendChild의 인수가 될 수 있다.
  let newTodo = document.createTextNode(inputNode.value);
  console.log(newTodo.data);
  // input을 만들고 checkbox 속성을 지정
  let checkboxNode = document.createElement("input");
  checkboxNode.setAttribute("type", "checkbox");
  checkboxNode.setAttribute("class", "checkbox");

  // 제거 버튼 만들기
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteBtn");
  let deleteText = document.createTextNode("X");
  deleteButton.appendChild(deleteText);

  // 폼을 제출할 때마다 li 태그 생성
  let createList = document.createElement("li");
  createList.setAttribute("class", "todo");
  // 생성된 li 태그에
  if (newTodo.data.trim().length !== 0) {
    // (1) 유저의 입력 추가.
    createList.appendChild(newTodo);
    // (2) 체크박스 인풋 추가.
    createList.insertBefore(checkboxNode, createList.childNodes[0]);
    // (3) 제거 버튼 추가
    createList.appendChild(deleteButton);
    // 이게 실행되지 않는데도, 자꾸 크기가 늘어남..
  }

  // chechbox에 체크가 될 때, 리스트의 색깔을 바꾸는 함수.
  checkboxNode.addEventListener("change", function () {
    if (this.checked) {
      // newTodo.style.color = "gray";
      // newTodo.style.textDecoration = "line-through";
    } else {
      this.parentNode.style.color = "unset";
      this.parentNode.style.textDecoration = "unset";
    }
  });

  // 생성된 li를 ul에 출력
  list.insertBefore(createList, list.childNodes[0]);

  // 폼 제출 후 input 칸 공백으로 초기화
  inputNode.value = "";

  // 클릭하면 할 일 목록에서 지워주는 이벤트 리스너
  deleteButton.addEventListener("click", function () {
    list.removeChild(this.parentNode);
  });
});

resetBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
