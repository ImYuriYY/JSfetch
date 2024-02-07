function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(data => {
        const todosWrapper = document.querySelector('.elements-wrapper')
        data.forEach(element => {
            const todo = document.createElement('div')
            todo.id = 'todo'
            
            const todoTitle = document.createElement('h2')
            todoTitle.id = 'todoTitle'
            todoTitle.innerText = element.title

            const todoStatus = document.createElement('p')
            todoStatus.id = 'todoStatus'
            element.completed ? todoStatus.innerText = 'Completed' : todoStatus.innerText = 'No completed'

            todo.appendChild(todoTitle)
            todo.appendChild(todoStatus)
            todosWrapper.appendChild(todo)
        });
    })
}

getData()