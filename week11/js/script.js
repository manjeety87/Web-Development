validateEmail = (event) => {
  let email = document.querySelector("#email").value;
  console.log(email);
  const isValid = true;
  if (email == "") {
    alert("Email is required");
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#joinList").addEventListener("click", validateEmail);
});
