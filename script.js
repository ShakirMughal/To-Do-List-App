const inputBox = document.getElementById("inp");
const listContainer = document.getElementById("list-con");
const error = document.getElementById("err");

function addTask() {
    if (inputBox.value === "") {
        error.style.margin = "0";
        error.style.opacity = "1"
        error.style.zIndex = "0";

        setTimeout(() => {
            error.style.marginTop = "-34px";
            error.style.opacity = "0"
            error.style.zIndex = "-1"
        }, 1000);
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Delete and Complete Task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

// for Storing data when I close browser

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// call the function
showTask();