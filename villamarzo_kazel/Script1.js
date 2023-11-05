const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const commentButton = document.getElementById("comment_button");

function checkInput() {
    const nameValue = nameInput.value.trim();
    const commentValue = commentInput.value.trim();

    if (nameValue !== "" && commentValue !== "") {
        commentButton.removeAttribute("disabled");
    } else {
        commentButton.setAttribute("disabled", true);
    }
}

nameInput.addEventListener("input", checkInput);
commentInput.addEventListener("input", checkInput);