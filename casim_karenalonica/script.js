const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const commentButton = document.getElementById('comment_button');

function enableCommentButton() {
    if (nameInput.value.trim() !== '' && commentInput.value.trim() !== '') {
		commentButton.removeAttribute('disabled');
    } else {
		commentButton.setAttribute('disabled', 'disabled');
    }
}

nameInput.addEventListener('input', enableCommentButton);
commentInput.addEventListener('input', enableCommentButton);