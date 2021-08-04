//getting all required things ready
const inputBox = document.quetryselector(".inputField input");
const addbtn = document.quetryselector(".inputField button");
const todoList = document.quetryselector(".todolist ");
const deleteAllBtn = document.quetryselector(". footer button");

//onkeyup event
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value; //getting user entered values 
    if (userEnteredeValue.trim() != 0) {
        addbtn.classList.add("active");
    } else {
        addbtn.classList.remove("active");
    }
}
showTasks();
addbtn.onclick = () => {

    letuserEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getyItem("New ToDo ");

    if (getLocalStorageData == NULL) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New ToDo ", JSON.stringify(listArray));
    showtask();
    addbtn.classList.remove("active");
}

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New ToDo ");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }

    const pendingTaskNumb = document.quetryselector(".pendingTasks");
    pendingTasksNumb.textcontent = listArray.length;
    if (listArray.lenght > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }

    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += '<li>${elements} <span class = "icon" onclick="deleteTask(${index})"> <i class="fas fa-trash"></i></span></li>';
    });
    todoList.innerHTML = newLiTag;
    inputBoxValue = "";
}
//delete task function
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem(" New ToDo ");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem(" New ToDo ", JSON.stringify(listArray));
    showTasks();
}
//delete all tasks function
deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem(" New ToDo ", JSON.stringify(listArray));
    showTasks();
}