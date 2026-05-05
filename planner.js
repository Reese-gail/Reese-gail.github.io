function addTask() {
    let task = document.getElementById("taskInput").value;
    let time = document.getElementById("timeInput").value;

    let li = document.createElement("li");

    li.textContent = time + " - " + task;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById('timeInput').value = "";
}