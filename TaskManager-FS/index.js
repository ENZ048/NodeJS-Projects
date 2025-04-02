const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "tasks.txt");


if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loadTasks() {
    const data = fs.readFileSync(filePath, "utf8");
    return data.split("\n")
        .filter(line => line.trim() !== "")
        .map(line => ({
            task: line.replace(" [completed]", ""),
            completed: line.includes(" [completed]")
        }));

    
}


function saveTasks(tasks) {
    const data = tasks.map(task => `${task.task}${task.completed ? " [completed]" : ""}`).join("\n");
    fs.writeFileSync(filePath, data);
}

function addTask() {
    rl.question("Enter the task : ", (newTask) => {
        const tasks = loadTasks();
        tasks.push({ task: newTask, completed: false });
        saveTasks(tasks);
        console.log("Task Added Successfully!");
        mainMenu();
    });
}

function viewTasks() {
    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("No Tasks Found!");
    } else {
        console.log("Tasks : ");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.completed ? `${task.task} [completed]` : task.task}`);
        });
    }
    rl.question("Press 0 to go back to Main Menu : ", (back) => {
        if (back === '0') {
            mainMenu();
        }
    })
}

function displayTasks() {
    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("No Tasks Found!");
    } else {
        console.log("Tasks : ");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.completed ? `${task.task} [completed]` : task.task}`);
        });
    }
}

function markTask() {
    const tasks = loadTasks();
    displayTasks();
    rl.question("Enter a task number to mark as complete : ", (num) => {
        const index = parseInt(num) - 1;
        if (tasks[index]) {
            tasks[index].completed = true;
            saveTasks(tasks);
            console.log("Task Marked as Completed!");
        } else {
            console.log("Invalid Task number!");
        }
        mainMenu();
    });
}

function deleteTask() {
    const tasks = loadTasks();
    displayTasks();
    rl.question("Enter a task number to delete : ", (num) => {
        const index = parseInt(num) - 1;
        if (tasks[index]) {
            tasks.splice(index, 1);
            saveTasks(tasks);
            console.log("Task deleted successfully!");
        } else {
            console.log("Invalid Task number!");
        }
        mainMenu();
    });
}

function mainMenu() {
    console.log("\n Task Manager");
    console.log("1. Add a Task");
    console.log("2. View a Task");
    console.log("3. Mark a Task as Completed");
    console.log("4. Delete a Task");
    console.log("5. Exit");

    rl.question("Choose an option : ", (choice) => {
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                markTask();
                break;
            case "4":
                deleteTask();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid option. Try again.");
                mainMenu();
        }
    });
}

mainMenu();
