
var lsOutput = document.getElementById('display');
const Btn = document.querySelector('.playAgain');
const Reset = document.querySelector('.Reset');

function displayTodo() {
  let studentObject = [];
  studentObject = JSON.parse(localStorage.getItem("Students"));

  // Check the value if is not null push it to the HTMl DOM 
  if (studentObject !== null && studentObject.length > 0) {
    for (i = 0; i <= studentObject.length - 1; i++) {
      var li = document.createElement("li");
      li.innerHTML = studentObject[i].name + " ------- " + studentObject[i].grade;
      lsOutput.appendChild(li);
    }
  }

  console.log("function is working");
}

Btn.addEventListener('click', (event) => {
  event.preventDefault();
  location.href = "./index.html";

});

Reset.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.clear();
  location.reload();
});
  displayTodo();