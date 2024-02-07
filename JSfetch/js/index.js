function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        const postsWrapper = document.querySelector('.elements-wrapper')
        data.forEach(element => {
            const post = document.createElement('div')
            post.classList = 'post'
            
            const postTitle = document.createElement('h2')
            postTitle.id = 'postTitle'
            postTitle.innerText = element.title

            const postBody = document.createElement('p')
            postBody.id = 'postBody'
            postBody.innerText = element.body
            
            post.appendChild(postTitle)
            post.appendChild(postBody)
            postsWrapper.appendChild(post)
            console.log(data)
        });
    })
}

getData()