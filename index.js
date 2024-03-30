import { posts } from '/dataTransfer.js'

const mainContainer = document.getElementById("main-container")


document.addEventListener('click', function(e){
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

document.addEventListener('dblclick', function(e){
    if (e.target.dataset.likeImg){
        handleLikeClick(e.target.dataset.likeImg)
    }
})

function handleLikeClick(postId){
    const targetPostObj = posts.filter(function(post){
        return post.id === postId
    })[0]
    if (targetPostObj.isLiked){
        targetPostObj.likes--
    }
    else {
        targetPostObj.likes++
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    render()
}


function getPostsHtml(){

    mainContainer.innerHTML = ``

    for (let post of posts){

        let likeIconClass = ''

        if (post.isLiked){
            likeIconClass = 'liked'
        }

        let postContent = `
            <section class="container" id="${post.id}">
                    
            <div class="user-info">
                    <img class="avatar" src="${post.avatar}">
                    <div>
                        <h1 class="name">${post.name}</h1>
                        <h2 class="location">${post.location}</h2>
                    </div>
            </div>
            
            <img class="container" id="post-img" src="${post.post}" data-like-img="${post.id}">
            
            <div class="engagement-section">
                <div class="icons">
                    <img class="heart-icon ${likeIconClass}" src="images/icon-heart.png" data-like="${post.id}">
                    <img class="comment-icon" src="images/icon-comment.png">
                    <img class="dm-icon" src="images/icon-dm.png">
                </div>
                <p class="like-count-el">${post.likes} likes</p>
                <p class="caption-section">
                    <span class="username">${post.username}</span>
                    <span class="caption">${post.comment}</span>
                </p>
            </div>`

            const lastPost = posts[posts.length - 1]

            if (post != lastPost){
                postContent += `<div class="grey-space"></div>`
            }
            postContent += `</section>`
            mainContainer.innerHTML += postContent
    }
}

function render(){
    getPostsHtml()
}

render()
