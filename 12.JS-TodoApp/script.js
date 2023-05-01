let inputEl = document.querySelector("#todo-input");
let add = document.querySelector("#add");
let ulEl = document.querySelector("#ul");
// let input=document.querySelector("#todo-input");
// let input=document.querySelector("#todo-input");

add.addEventListener("click", function () {
  if (inputEl.value) {
    let liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    ulEl.append(liEl);
    inputEl.value = "";
  }
});

add.disabled = true;

inputEl.addEventListener("input", function (event) {
  if (event.target.value) {
    add.disabled = false;
  } else {
    add.disabled = true;
  }
});
function createList() {
  ulEl.innerHTML += `
    <li
    class="list-group-item list-group-item-danger rounded d-flex justify-content-between align-items-center my-3"
  >
    <span id="span">${inputEl.value}</span>
    <div class="libtn">
      <button id="edit" class="btn btn-success">Edit</button>
      <button id="delete" class="btn btn-danger">Delete</button>
    </div>
  </li>
    
    `;
    

let editEl = document.querySelector("#edit");
let deleteEl = document.querySelector("#delete");
deleteEl.forEach((item) => {
    item.addEventListener("click", function () {
      //   console.log(this);
        // this.parentElement.remove();
        this.parentElement.parentElement.remove();
      //   console.log(this.closest("li"));
      this.closest("li").remove();
    });
  });

  editEl.forEach((item) => {
    item.addEventListener("click", function () {
      // console.log(this.closest("li"));

      //   todoInput.value = this.closest("li").children[0].innerText;
      inputEl.value = this.closest("li").firstElementChild.innerText;
      this.closest("li").remove();
    });
  });

  inputEl.value = "";
  add.disabled = true;
}
add.addEventListener("click", createList);

window.addEventListener("keyup", function (event) {
  //   console.log(event.code);

  if (event.code === "Enter") {
    inputEl.value && createList();
    // addTodo.disabled = true;
  }
})

// add.addEventListener("click", createList);

// window.addEventListener("keyup", function (event) {
//   //   console.log(event.code);

//   if (event.code === "Enter") {
//     inputEl.value && createList();
//     addTodo.disabled = true;
//   }
// });
// add.addEventListener("click", createList);

   

