// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('oSNAKE website loaded');

    const forumContainer = document.getElementById('forum-container');
    const newPostForm = document.getElementById('new-post-form');

    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;

        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <h3>${postTitle}</h3>
            <p>${postContent}</p>
        `;

        forumContainer.appendChild(newPost);
        newPostForm.reset();
    });
});
