let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment_text");
let commentButton = document.getElementById("comment_button");
let commentsSection = document.querySelector(".team-comment");

nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", toggleCommentButton);

commentButton.addEventListener("click", addComment);

function toggleCommentButton() {
    let nameValue = nameInput.value;
    let commentValue = commentInput.value;

    if (nameValue !== "" && commentValue !== "") {
        commentButton.removeAttribute("disabled");
    } else {
        commentButton.setAttribute("disabled", "disabled");
    }
}

function addComment() {
    let name = nameInput.value;
    let comment = commentInput.value;

    if (name.trim() === '' || comment.trim() === '') {
        return;
    }

let commentElement = document.createElement('div');
commentElement.innerHTML = `<p><strong>Name:</strong> ${name}</p><p>${comment}</p>`;
commentsSection.appendChild(commentElement);

nameInput.value = '';
commentInput.value = '';
commentButton.setAttribute('disabled', 'true');
}