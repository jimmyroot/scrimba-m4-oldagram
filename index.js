const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

// Init
const mainEl = document.getElementById('container-all-posts')

document.addEventListener('click', (event) => {
    // Console.log(event.target)
    const likedPostID = event.target.dataset.postid

    if (likedPostID) {
        // set operation (only using one now but could use for more functionality)
        const operation = event.target.dataset.operation
        if (operation === 'like') {
            // Set up variables
            const likedPostLikesEl = document.getElementById(`likes-for-post${likedPostID}`)
            const likeEl = document.getElementById('img-like')
            let likes = posts[likedPostID].likes
            let liked = posts[likedPostID].liked
            
            // Toggle liked
            console.log(liked = !liked)
            
            // Increment or decrement depending on if we liked or unliked
            liked ? likes++ : likes--

            // Update the DOM
            // likedPostLikesEl.textContent = `${likes} likes` 
            posts[likedPostID].likes = likes
            posts[likedPostID].liked = liked

            renderPosts(getHTML(posts))
        }
    }
})

function getHTML(posts) {
    let html = ``
    for (const [index, post] of posts.entries()) {
        const div = `
            <div class="container-single-post">
                            <div class="header-post">
                                <img class="avatar-user" src="${post.avatar}">
                                <div>
                                    <p class="p-user-data">
                                        <span class="bold">
                                            ${post.name}
                                        </span>
                                        <span class="location">
                                            ${post.location}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <img class="img-post" src="${post.post}">
                            <div class="footer-post">
                                <div class="container-buttons">
                                    <img 
                                        class="btn btn-like"
                                        src="${
                                            post.liked ? 'images/icon-full-heart.png' : 'images/icon-heart.png'
                                        }" 
                                        data-operation=like
                                        data-postid=${index}
                                        draggable=false
                                    >
                                        <img class="btn" id="img-like" src="images/icon-comment.png" draggable=false>
                                        <img src="images/icon-dm.png" class="btn" draggable=false>
                                </div>
                                <div>
                                    <p
                                        class="p-footer bold" 
                                        id="likes-for-post${index}"
                                    > 
                                        ${post.likes} likes
                                    </p>
                                    <p class="p-footer">
                                        <span class="bold">
                                            ${post.username}&nbsp;
                                        </span>
                                        ${post.comment}
                                    </p>
                                </div>
                            </div>
                    </div>
        `
        html += div
    }
    return html
    console.log(html)
}

function renderPosts(html) {
    clearPosts()
    mainEl.innerHTML += html
    console.log('called')
}

function clearPosts() {
    mainEl.innerHTML = ''
}

renderPosts(getHTML(posts))