const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');
        const commentButton = document.getElementById('comment_button');
        const commentsContainer = document.getElementById('comments');

        commentButton.addEventListener('click', function () {
            const name = nameInput.value;
            const comment = commentInput.value;

            if (name && comment) {
                // Create a new comment element
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';
                commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;

                // Append the new comment to the comments container
                commentsContainer.appendChild(commentElement);

                // Clear the input fields
                nameInput.value = '';
                commentInput.value = '';
            }
        });