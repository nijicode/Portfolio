const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0 || name === null || name.match(/^\s*$/)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  if (!name.match(/^[A-Za-z\s'-]+$/)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  if (name.length <= 2) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check valid"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0 || email === null || email.match(/^\s*$/)) {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check valid"></i>`;
  return true;
}
function validateMessage() {
  let message = document.getElementById("message").value;
  let required = 15;
  let left = required - message.length;

  if (left > 0 || message.match(/^\s*$/)) {
    messageError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    return false;
  }
  messageError.innerHTML = `<i class="fa-solid fa-circle-check valid"></i>`;
  return true;
}
function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    return false;
  }
  Swal.fire({
    title: "Confirm Submission",
    text: "Are you sure you want to submit this form?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, submit it!",
    cancelButtonText: "Cancel",
    customClass: {
      confirmButton: "swal-confirm-button-class",
      cancelButton: "swal-cancel-button-class",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Thank you!",
        text: "Your message has been submitted!",
        icon: "success",
      });
      document.getElementById("myForm").submit();
    }
  });
  return false;
}
