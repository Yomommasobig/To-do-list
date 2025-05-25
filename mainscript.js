
//TASKS STUFF FOR ADDING DELETING AND SAVING
let addbutton = document.getElementById('add');
let listcontainer = document.getElementById('list-container');
let inputbox = document.getElementById('input-box');

function saveTasks() {
    localStorage.setItem('tasks', listcontainer.innerHTML);
};

function loadTasks() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        listcontainer.innerHTML = savedTasks;
        addEventListeners();
    }
};

function addEventListeners() {
    document.querySelectorAll('.paragraph-styling').forEach(paragraph => {
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
            saveTasks();
        });
        paragraph.addEventListener('dblclick', function(){
            paragraph.remove();
            saveTasks();
            const sound = new Audio("sounds/remove.mp3");
            sound.currentTime = 1;  
            sound.play(); 
        });
    });
};


addbutton.addEventListener('click', function(){
    if (inputbox.value.trim() !== "") {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputbox.value;
        listcontainer.appendChild(paragraph);
        inputbox.value = "";
        addEventListeners();
        saveTasks();
        const sound = new Audio("sounds/add.mp3");
        sound.volume = 0.2;  
        sound.play(); 
    }
});
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addbutton.click();
    }
});

// Theme saving
document.addEventListener("DOMContentLoaded", function () {
    const themeRadios = document.querySelectorAll('.theme-picker input[type="radio"]');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.getElementById(savedTheme).checked = true;
    }

    // Save selected theme to localStorage when changed
    themeRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            localStorage.setItem("selectedTheme", this.id);
        });
    });
});

pink.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});
red.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});
orange.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});
green.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});
blue.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});
purple.addEventListener("change", function(event) {
    const sound = new Audio("sounds/theme-click.mp3");
    sound.volume = 0.2;  
    sound.play();
});

//menu hidden
let menu = document.getElementById("menu");
let themePicker = document.getElementById("theme-picker")
menu.addEventListener("click", () => {
    if (themePicker.style.display === "none") {
        themePicker.style.display = "block";
        menu.textContent = "X"; // Show gear icon when open
        const sound = new Audio("sounds/open-settings.mp3");
        sound.volume = 0.5;  
        sound.play();
    } else {
        themePicker.style.display = "none";
        menu.textContent = "⚙️";  // Show "X" when closed
        const sound = new Audio("sounds/open-settings.mp3");
        sound.volume = 0.5;  
        sound.play();
    }
});

loadTasks();
console.log(localStorage);
