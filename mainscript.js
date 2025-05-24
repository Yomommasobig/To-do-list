let addbutton = document.getElementById('add');
let listcontainer = document.getElementById('list-container');
let inputbox = document.getElementById('input-box');

function saveTasks() {
    localStorage.setItem('tasks', listcontainer.innerHTML);
}

function loadTasks() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        listcontainer.innerHTML = savedTasks;
        addEventListeners();
    }
}

function addEventListeners() {
    document.querySelectorAll('.paragraph-styling').forEach(paragraph => {
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
            saveTasks();
        });
        paragraph.addEventListener('dblclick', function(){
            paragraph.remove();
            saveTasks();
        });
    });
}

addbutton.addEventListener('click', function(){
    if (inputbox.value.trim() !== "") {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputbox.value;
        listcontainer.appendChild(paragraph);
        inputbox.value = "";
        addEventListeners();
        saveTasks();
    }
});

loadTasks();
console.log(localStorage);
