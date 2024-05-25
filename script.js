const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorEmail = document.getElementById("emailerror");
const errorPass = document.getElementById("passerror");
const pass = document.getElementById("passed");

form.addEventListener("submit", (e) => {
  let EmailMessages = [];
  let passMessages = [];
  let passedMessages = [];
  if (email.value.length < 13) {
    EmailMessages.push(
      "Make sure email is more than 3 characters and has @ and a ."
    );
    console.log("Error 1");
  }
  if (password.value.length < 8) {
    passMessages.push("Make sure password is more than 8 characters");
    console.log("Error 2");
  }

  if (email.value.length > 13 && password.value.length > 8) {
    passedMessages.push("All good to go!");
    console.log("Passing");
  }
  if (EmailMessages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = EmailMessages.join(", ");
  }
  if (passMessages.length > 0) {
    e.preventDefault();
    errorPass.innerText = passMessages.join(", ");
  }

  if (passedMessages.length > 0) {
    e.preventDefault();
    pass.innerHTML = passedMessages.join(", ");
  }
});
