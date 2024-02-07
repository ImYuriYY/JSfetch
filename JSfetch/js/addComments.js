async function setData() {
    let commentInputName = document.getElementById('commentInputName')
    let commentBodyTextarea = document.getElementById('commentBodyTextarea')
    let commentInputEmail = document.getElementById('commentInputEmail')

    let newComment = {
        name: commentInputName.value,
        body: commentBodyTextarea.value,
        email: commentInputEmail.value,
        id: 1,
        userId: 1
    }

    let response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newComment)
    })
    let result = await response.json()
    console.log(result, 'Success!!!')


    
}

const sendButton = document.getElementById('sendButton')
sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    setData()
})