let addToDoButton = document.getElementById("addTODO");
let todoconntainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  var buttonx = document.createElement("button");
  paragraph.classList.add("paragraph-styling");
  buttonx.classList.add("buttonx-style");
  paragraph.innerHTML = inputfield.value;
  buttonx.innerHTML = "Delete";
  todoconntainer.appendChild(paragraph);
  todoconntainer.appendChild(buttonx);

  inputfield.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  buttonx.addEventListener("click", function () {
    paragraph.textContent = "";
    buttonx.remove();
  });
});
