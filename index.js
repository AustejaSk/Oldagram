import { posts } from '/dataTransfer.js'

const mainContainer = document.getElementById("main-container")

function renderPosts(){
    mainContainer.innerHTML = ``
    for (let i = 0; i < posts.length; i++){
        let postContent = `
            <section class="container">
                    
            <div class="user-info">
                    <img class="avatar" src=${posts[i].avatar}>
                    <div>
                        <h1 class="name">${posts[i].name}</h1>
                        <h2 class="location">${posts[i].location}</h2>
                    </div>
            </div>
            
            <img class="container" id="post-img" src=${posts[i].post}>
            
            <div class="engagement-section">
                <div class="icons">
                    <img id="heart-icon" src="images/icon-heart.png">
                    <img id="comment-icon" src="images/icon-comment.png">
                    <img id="dm-icon" src="images/icon-dm.png">
                </div>
                <p id="like-count-el">${posts[i].likes} likes</p>
                <p class="caption-section">
                    <span class="username">${posts[i].username}</span>
                    <span class="caption">${posts[i].comment}</span>
                </p>
            </div>`
            if (i < posts.length - 1){
                postContent += `<div class="grey-space"></div>`
            }
            postContent += `</section>`
            mainContainer.innerHTML += postContent
    }
}

renderPosts()
