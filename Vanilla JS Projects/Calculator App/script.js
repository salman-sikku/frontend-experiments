let btns = document.querySelectorAll("button");
let totalValue = document.getElementById("totalValue");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "DEL") {
      totalValue.textContent = totalValue.textContent.slice(0, -1);
    } else if (btn.innerText === "RESULT") {
      try {
        totalValue.textContent = eval(totalValue.innerHTML);
      } catch (error) {
        totalValue.textContent = "Error";
      }
    } else if (btn.innerText === "C") {
      totalValue.textContent = "0";
    } else {
      totalValue.textContent += btn.innerHTML;
    }
  });
});
