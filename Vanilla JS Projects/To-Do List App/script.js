let itemVlue = document.querySelector("input");
let ul = document.querySelector("ul");

let items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((text) => {
  createList(text);
});

function createList(text){
  let li = document.createElement("li");
  let checkBtn = document.createElement("span");
  let delbtn = document.createElement("span");
  li.innerHTML = text;
  delbtn.classList.add("delLi");
  delbtn.innerHTML = '<i class="bi bi-x-lg"></i>';

  li.prepend(checkBtn);
  li.prepend(delbtn);

  checkBtn.addEventListener("click", () => {
    if (checkBtn.innerHTML === "") {
      checkBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
      checkBtn.style.border = "1px solid green";
    } else {
      checkBtn.innerHTML = "";
      checkBtn.style.border = "1px solid #333";
    }

    checkBtn.style.color = "green";
    li.classList.toggle("li-line");
  });

  delbtn.addEventListener("click", () => {
    li.remove();
    items = items.filter((item)=> item !== text);
    localStorage.setItem("items", JSON.stringify(items))
  });

  ul.appendChild(li);
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const text = itemVlue.value.trim();
    if (text !== "") {
      items.push(text);
      localStorage.setItem("items", JSON.stringify(items));
      createList(text);
      itemVlue.value = "";
    }
  }
});
 