const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButtonElem = document.getElementById('submitToDoButton');
const activatesDeletes = () => {
    const deleteButtons= document.getElementsByClassName('deleteButton');
    // console.log(deleteButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            // remove card that the button was on 
            const buttonClicked = e.target;
            const cardToDelete = buttonClicked.parentNode.parentNode;
            cardToDelete.remove();
            //.parentNode
            //.remove()
        }) 
    }
}
// Other way to do the top function

// document.querySelector("body").addEventListener("click", function(event) {
//     if(event.target.classList.contains('deleteButton')) {
//         const buttonClicked = event.target;
//         const cardToDelete = buttonClicked.parentNode.parentNode;
//         cardToDelete.remove();
//     }
// })

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let  domString =`<div class="card w-25 m-2">
    <div class="card-body" >
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <button href="#" class="btn btn-danger deleteButton">Delete</button>
    </div>
  </div>`;

    printToDom (domString, 'toDoCards');
    activatesDeletes();
}

submitToDoButtonElem.addEventListener('click', (e)=>{
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});

// document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
//     e.preventDefault();

//     buildNewToDoCard(toDoInputElem.value, notesInputElem.value);

// })
