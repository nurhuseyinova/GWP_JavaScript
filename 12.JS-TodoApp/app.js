// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   if (input.value) {
//     let liElement = document.createElement("li");
//     liElement.innerText = input.value;

//     ul.append(liElement);

//     input.value = "";
//   } else {
//     alert("can not be empty");
//   }
// });

let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let listGroup = document.querySelector(".list-group");

addTodo.disabled = true;
addTodo.innerText="ADD"

// addTodo.setAttribute("disabled", null);
// addTodo.removeAttribute("disabled");

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

function createList() {
  listGroup.innerHTML += `
    <li
    class="list-group-item list-group-item-danger rounded d-flex justify-content-between align-items-center my-3"
  >
    <span>${todoInput.value}</span>
    <div>
      <button type="button" class="btn btn-success">EDIT</button>
      <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </li>
    `;

  let allDeleteBtns = document.querySelectorAll(".btn-danger");
  let editDeleteBtns = document.querySelectorAll(".btn-success");

  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.remove();
      //   this.parentElement.parentElement.remove();
      //   console.log(this.closest("li"));
      this.closest("li").remove();
    });
  });

//  let bool=false
  editDeleteBtns.forEach((item) => {
    // bool=!bool
    item.addEventListener("click", function () {
      console.log(this.closest("li"));

      //   todoInput.value = this.closest("li").children[0].innerText;
      todoInput.value = this.closest("li").firstElementChild.innerText;
      this.closest("li").remove();
      if(addTodo.innerText==="ADD"){
      addTodo.innerText="Edit"
      addTodo.style.backgroundColor="green";
      addTodo.disabled = false;
      }
      else if(addTodo.innerText==="Edit"){
        addTodo.innerText="ADD"
      addTodo.style.backgroundColor="blue";
      

      }
    });
  });

  todoInput.value = "";
  addTodo.disabled = true;
}
addTodo.addEventListener("click", createList);

window.addEventListener("keyup", function (event) {
  //   console.log(event.code);

  if (event.code === "Enter") {
    todoInput.value && createList();
    // addTodo.disabled = true;
  }
});