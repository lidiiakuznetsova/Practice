$ (function() {
let buttonEnter = $('#enter');
let userInput = $('#userInput');
let ul = $('ul');
let localStorage = window.localStorage;
let todoMap = [{
    ind:1,
    text:'example'
 }]
// проверка на наличие символов
function inputLength() {
    return !!userInput.val()
    
}
// функция для создания заметок
function createTodo() {
    let li = $("<li>");
    li.append(document.createTextNode(userInput.val()))
    ul.append(li)
    todoMap.push({
        tasknumber:todoMap.length+1,
        text:userInput.val()
    })
    //сохранение данных
    localStorage.setItem('TodoTasks', JSON.stringify(todoMap));
    userInput.val('');
    
    let deleteButton = $('<button>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
    deleteButton.click(deleteTodoItem);


// функция для удаления записи
    function deleteTodoItem() {
        li.animate(
            {
                'margin-left':'300px',
                'margin-right':'300px',
                
                'margin-top':'300px',
                'margin-bottom':'300px',

            },
            
        {duration:500,queue:false})
        li.fadeOut(1000);
        
       // li.add('delete')     
    }
//функция для отметки выполненной записи
    li.click(function() {
        li.toggleClass('done')
    })   
}
// функция для создания записи по клику на иконку
buttonEnter.click(function() {
    if (inputLength()){
        createTodo()
    }
    else {
        alert ('Empty task!')  
    }
})
 //добавление записи на enter
function changeListAfterKeypress(event){
    if (inputLength() && event.which === 13){
        createTodo()
    }
}

userInput.keypress(changeListAfterKeypress)
})