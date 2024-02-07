async function setData() {
    let postInputTitle = document.getElementById('postInputTitle')
    let postBodyTextarea = document.getElementById('postBodyTextarea')

    let newComment = {
        name: postInputTitle.value,
        body: postBodyTextarea.value,
        id: 1,
        userId: 1
    }

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
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