let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");

function checkInputs() {
  if (nameInput.value && commentInput.value) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

nameInput.addEventListener("input", checkInputs);
commentInput.addEventListener("input", checkInputs);
