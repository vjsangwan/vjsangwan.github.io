let todos = [];
let AddButton = document.querySelector("#AddButton");
document.addEventListener('DOMContentLoaded', () => {
    let storage = "[]";
    if(localStorage.getItem('listItem') !== null){
        storage = localStorage.getItem('listItem');
    }
    todos=JSON.parse(storage); //coverted string to JSON
    renderlist();
    document.querySelector('#AddButton').disabled = true;
    document.querySelector('#todoForm').onkeyup = () => {
        if (document.querySelector('#todoForm').value.length > 0) {
            document.querySelector('#AddButton').disabled = false;
        } else {
            document.querySelector('#AddButton').disabled = true;
        }
    }
})

AddButton.addEventListener("click", () => {

    // Pushing a string into todos array
    // todos.push(document.querySelector('#todoForm').value);

    const newTask = {
        name: document.querySelector('#todoForm').value,
        isCompleted: false

    }
    // TODO: Push a object into todo array
    //console.log("checking todos value  = ", todos);
    todos.push(newTask);

    renderlist();
    document.querySelector('#todoForm').value = '';
    document.querySelector('#AddButton').disabled = true;
   localStorage.setItem('listItem', JSON.stringify(todos));
}
)

function renderlist() {
    let ul = document.querySelector("#list-items");
    ul.innerHTML = [""];
    for (i = 0; i < todos.length; i++) {
        let li = document.createElement("li");
        let TodoItems=todos[i];

        // Create a checkbox element
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = todos[i].name;
        checkbox.checked = todos[i].isCompleted;
        checkbox.addEventListener("click", function(e){
           for(j=0;j<todos.length;j++){
            if(todos[j].name === this.id){
                todos[j].isCompleted=!todos[j].isCompleted;
            }
           }
           localStorage.setItem('listItem',JSON.stringify(todos));
        })
        //Create a delete button
        let del = document.createElement("input");
        del.setAttribute("type","BUTTON");
        del.setAttribute("value","del");
        del.id=todos[i].name;
        
        del.addEventListener("click", function(e){
            //Delete from DOM
            let ListToBeDeleted = document.querySelector(`#${this.id}`);
           ListToBeDeleted.parentNode.remove(ListToBeDeleted);
           //Delete from Array
           const ObjectToBeDeleted=TodoItems;
           const index=todos.indexOf(ObjectToBeDeleted);
           todos.splice(index,1);
           //Delete from local storage
           localStorage.setItem('listItem',JSON.stringify(todos));

        })
        
        // todos[i].isCompleted
        li.innerHTML = todos[i].name;
        li.prepend(checkbox);
        li.append(del);
        ul.prepend(li);
        
    }
}


