function getData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
    .then(data => {
        const commentsWrapper = document.querySelector('.elements-wrapper')
        data.forEach(element => {
            const comment = document.createElement('div')
            comment.id = 'comment'

            const commentName = document.createElement('h2')
            commentName.id = 'commentName'
            commentName.innerText = element.name

            const commentBody = document.createElement('p')
            commentBody.id = 'commentBody'
            commentBody.innerText = element.body

            const commentEmail = document.createElement('p')
            commentEmail.id = 'commentEmail'
            commentEmail.innerText = element.email

            comment.appendChild(commentName)
            comment.appendChild(commentBody)
            comment.appendChild(commentEmail)
            commentsWrapper.appendChild(comment)
        });
    })
}

getData()