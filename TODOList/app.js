let buttonEnter = document.getElementById('enter')
let userInput = document.getElementById('userInput')
let ul = document.querySelector('ul')

function inputLength() {
    if(userInput.value > "                  "){
    return userInput.value.length > 0 
    }
}

function createTodo() {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
    userInput.value = ''

    let deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode('X'))
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteTodoItem)

    function deleteTodoItem() {
        li.classList.add('delete')     
    }
    li.onclick = function() {
        li.classList.add('done')
    }    
}

buttonEnter.onclick = function() {
    if (inputLength()){
        createTodo()
    }
    else {
        alert ('Empty task!')  
    }
}

function changeListAfterKeypress(event){
    if (inputLength() && event.which === 13){
        createTodo()
    }
}

userInput.addEventListener('keypress', changeListAfterKeypress)