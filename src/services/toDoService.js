function getTodo(id = 1) {
    console.log('First')
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('Second')
        return response.json()
    })
    .then(payload => {
        console.log('Third')
        console.log(payload)
})
console.log('Fourth')
}

export default getTodo