let form = document.forms;
let list = document.querySelector("#list");

form[0].addEventListener("submit", function (e) {
      e.preventDefault();
      const value = e.target.querySelector("input[type='text']").value;
      list.innerHTML += `<div class="block">${value}<button type="button">delete</button></div>
      </div>`;
});

let deleteButton = document.querySelector(".container");

deleteButton.addEventListener("click", function (e) {
      if (e.target.tagName == "BUTTON") list.innerHTML = "";
})

console.log(list)

list.addEventListener('click', function (e) {
      if (e.target.tagName == "BUTTON") {
            const div = e.target.parentElement;
            const root = div.parentElement;
            root.removeChild(div);
      }   
});


