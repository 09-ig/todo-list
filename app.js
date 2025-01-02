let UserInput = prompt("Enter the task: ").toLowerCase();
let tasks = [];

while (UserInput !== "quit" && UserInput !== "q") {
    if (UserInput === "list") {
        console.log("*******");
        if (tasks.length === 0) {
            console.log("No tasks in the list.");
        } else {
            for (let i = 0; i < tasks.length; i++) {
                console.log(`${i + 1}: ${tasks[i]}`);
            }
        }
        console.log("*******");
    } else if (UserInput === "new") {
        const newTodo = prompt("What is the new todo?");
        tasks.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (UserInput === "delete") {
        const index = parseInt(prompt("Enter the index to delete:")) - 1;
        if (!isNaN(index) && index >= 0 && index < tasks.length) {
            const deleted = tasks.splice(index, 1); // Removes the task at the index
            console.log(`${deleted[0]} was removed from the list.`);
        } else {
            console.log("Invalid index.");
        }
    } else {
        console.log("Invalid command. Try 'list', 'new', 'delete', or 'quit'.");
    }
    UserInput = prompt("Enter the task: ").toLowerCase();
}

console.log("You quit the app.");
