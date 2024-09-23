"use strict";

let myForm = document.getElementById("myForm");
let list = document.getElementById("list");

myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지
  // 유저의 입력값에 접근하기
  let inputNode = document.getElementById("input");
  let newTodo = inputNode.value;
  console.log(newTodo);
  // 폼 제출 후 input 칸 공백으로 초기화
  inputNode.value = "";

  // 폼을 제출할 때마다 li 태그 생성
  let createList = document.createElement("li");
  // 생성된 li 태그에 유저의 입력 추가.
  createList.innerHTML = `<input type="checkbox" /> ${newTodo}`;
  console.log(createList);

  // 생성된 li를 ul에 출력
  list.insertBefore(createList, list.childNodes[0]);
});
