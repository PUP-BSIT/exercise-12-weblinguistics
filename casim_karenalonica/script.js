document.addEventListener('DOMContentLoaded', function () {
	const commentButton = document.getElementById('comment_button');
	const nameInput = document.getElementById('name');
	const commentInput = document.getElementById('comment_text');
	const commentsContainer = document.getElementById('comments');

	commentButton.addEventListener('click', function () {
		const name = nameInput.value;
		const comment = commentInput.value;

		if (name && comment) {
			const newComment = document.createElement('div');
			newComment.className = 'comment';

			const commentContent = document.createElement('p');
			commentContent.innerHTML = `<strong>${name}:</strong> ${comment}`;
			newComment.appendChild(commentContent);
				
			commentsContainer.appendChild(newComment);

			nameInput.value = '';
			commentInput.value = '';
		}
	});
});