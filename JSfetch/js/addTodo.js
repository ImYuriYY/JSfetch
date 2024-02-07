async function setData() {
    let todoTitleInput = document.getElementById('todoTitleInput')
    let todoSelectCompleted = document.getElementById('todoSelectCompleted')
    let newTodo = {
        id: 1,
        userId: 1,
        title: todoTitleInput.value,
        completed: todoSelectCompleted.options[todoSelectCompleted.selectedIndex].innerText === 'Yes' ? true : false
    }
    let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newTodo)
    })
    let result = await response.json()
    console.log(result, 'Success!!!')

    
}

const sendButton = document.getElementById('sendButton')
sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    setData()
})