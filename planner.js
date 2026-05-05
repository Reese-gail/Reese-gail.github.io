function addTask() {
    let task = document.getElementById("taskInput").vaule;
    let time = document.getElementById("timeInput").vaule;

    let li = document.createElement("li");

    li.textContent = time + " - " + task;

    document.getElementById("tasklist").appendChild(li);

    document.getElementById("taskInput").vaule = "";
    document.getElementById('timeInput').vaule = "";
}