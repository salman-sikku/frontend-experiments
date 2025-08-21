let form = document.querySelector("form");
let uname = document.getElementById("Uname");
let email = document.getElementById("Uemail");
let pass = document.getElementById("Upassword");
let error = document.getElementsByClassName("error");

form.addEventListener("submit", (edetls) => {
  edetls.preventDefault();

  let valid = true;

  // Reset all errors before checking
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }

  // Name validation
  if (uname.value.length < 2) {
    error[0].textContent = "At least enter two characters";
    error[0].style.display = "block";
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailCheck = emailRegex.test(email.value);

  if (!emailCheck) {
    error[1].textContent = "Invalid email format";
    error[1].style.display = "block";
    valid = false;
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  let checkPass = passwordRegex.test(pass.value);

  if (!checkPass) {
    error[2].textContent =
      "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol";
    error[2].style.display = "block";
    valid = false;
  }

  if (valid === true) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
