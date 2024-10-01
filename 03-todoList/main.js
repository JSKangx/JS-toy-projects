"use strict";

let myForm = document.getElementById("myForm");
let list = document.getElementById("list");
let resetBtn = document.getElementById("reset");

// 할 일 삭제 처리
resetBtn.addEventListener("click", () => {
  list.innerHTML = "";
});

// 체크박스 생성
function createCheckbox() {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");

  checkbox.addEventListener("change", () => {
    handleCheckboxChange(checkbox);
  });

  return checkbox;
}

// 할 일 텍스트 생성
function createTodoText(text) {
  let span = document.createElement("span");
  span.innerHTML = text;

  return span;
}

// 삭제 버튼 생성
function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteBtn");
  deleteButton.innerHTML = "X";

  deleteButton.addEventListener("click", () => {
    list.removeChild(deleteButton.parentNode);
  });

  return deleteButton;
}

// 새로운 todo 항목 생성
function createTodoItem(value) {
  let todo = document.createElement("li");

  let checkboxNode = createCheckbox();
  let todoTextNode = createTodoText(value);
  let deleteButtonNode = createDeleteButton();

  // 리스트 아이템에 체크박스, 텍스트, 삭제버튼 추가
  todo.appendChild(checkboxNode);
  todo.appendChild(todoTextNode);
  todo.appendChild(deleteButtonNode);

  return todo;
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지
  // 유저의 입력값에 접근하기
  let inputNode = document.getElementById("input");

  // input에 입력된 것이 있을 때만
  if (inputNode.value.trim()) {
    let newTodoItem = createTodoItem(inputNode.value);
    // 생성된 li를 ul에 출력
    list.insertBefore(newTodoItem, list.childNodes[0]);
    inputNode.value = "";
  }
});

// 체크박스 상태 변경 처리
function handleCheckboxChange(checkbox) {
  let todoTextNode = checkbox.nextSibling;
  if (checkbox.checked) {
    todoTextNode.style.color = "rgba(0, 0, 0, 0.2)";
    todoTextNode.style.textDecoration = "line-through";
  } else {
    todoTextNode.style.color = "unset";
    todoTextNode.style.textDecoration = "unset";
  }
}
