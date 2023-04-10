const checkButton= document.querySelector('.check-btn');
const header = document.querySelector('.ink');
const todoInput = document.querySelector('.todo-input');
const game =document.getElementById('game');
const audio = document.getElementById('audio')


window.addEventListener('load', displayTodos);






function displayTodos(){
    // console.log('andy')
}









checkButton.addEventListener('click',createTodo);

function createTodo(){
    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
    newList.innerText=todoInput.value;

    const completeButton = document.createElement('button')
    completeButton.innerText='Edit';
    completeButton.classList.add('check-btn')
    newDiv.appendChild(completeButton)
    completeButton.addEventListener('click',editButton);
    game.appendChild(newDiv)

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click',cancelButton)
    newDiv.appendChild(deleteButton)
    game.appendChild(newDiv)
    


    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn');
    updateButton.addEventListener('click',update)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);
    todoInput.value='';
}

function cancelButton(e){
    e.target.parentElement.remove();
   audio.play();


}

function update(e){ 
    if (e.target.parentElement.firstChild.classList.contains('strike')){
        e.target.parentElement.firstChild.classList.remove('strike');
        
    }
    else{
        e.target.parentElement.firstChild.classList.add('strike');
        // audio.play();
        
    }
    audio.play();
}


function editButton(e){
    let editElement = e.target.parentElement.children;
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    const inputElement = document.createElement('input')
    const newForm = document.createElement('form')
    newForm.appendChild(inputElement)
    let saveButton = document.createElement('button')
    saveButton.addEventListener('click', saveBtn);
    saveButton.innerText='save';
    saveButton.classList.add('save-btn')
    inputElement.setAttribute('placeholder','Edit...')
    newForm.appendChild(saveButton);
    game.appendChild(newForm);
}

function saveBtn(e){
    e.preventDefault()

    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
 
    
    newList.innerText=e.target.parentElement.children[0].value;
    const editButton = document.createElement('button')
    editButton.innerText='Edit';
    editButton.classList.add('edit-btn')
    newDiv.appendChild(editButton)
    editButton.addEventListener('click',editButton);

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click',cancelButton)
    newDiv.appendChild(deleteButton)

    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn');
    updateButton.addEventListener('click',update)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);
    localStorage.setItem('andy',  e.target.parentElement.children[0].value);
    console.log(e.target.parentElement.children[0])

    e.target.parentElement.children[0].remove();

    e.target.remove();
}

// let person = {
//     0: 'andy',
//     1: 30,
//     height: 1.85,
//     item:['pen','pencil','jotter','eraser']
// }
// console.log(person['item'][2])

// const animals = ['lion','dog', 'bear','cat','chicken', ['guava','watermelon','234'],'tiger','monkey',100,'100'];

// // for(i = 0; i <= animals.length-1; i++){
// //     console.log(animals[i])
// // }
// console.log(animals)

// let someone = 'pokemon';
// console.dir(someone)