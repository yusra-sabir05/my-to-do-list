#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
let main = async () => {
    while (condition) {
        // ------------------------------------options-------------------------------------
        let option = await inquirer.prompt([
            {
                name: "my_list",
                type: "list",
                message: "please select an option",
                choices: ["Add Task", "View List", "Update task", "Delete task"]
            }
        ]);
        // -------------------------------------calling tasks-----------------------------------------------
        if (option.my_list === "Add Task") {
            await add();
        }
        else if (option.my_list === "View List") {
            await view();
        }
        else if (option.my_list === "Update task") {
            await update();
        }
        else if (option.my_list === "Delete task") {
            await deleteTask();
        }
    }
};
// ====================================== adding process ==================================================
let add = async () => {
    let addAnswer = await inquirer.prompt([
        {
            name: "add_list",
            type: "input",
            message: "add some task in your list"
        }
    ]);
    todoList.push(addAnswer.add_list);
    console.log(`\n ${addAnswer.add_list} task is added`);
};
// ====================================view task ====================================================
let view = async () => {
    console.log("\n your todo list \n");
    todoList.forEach((add_list, index) => {
        console.log(`${index}: ${add_list}`);
    });
};
// ------------------------------------update task-------------------------------------------------------
let update = async () => {
    await view();
    let updTask = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the `index no` you want to update"
        },
        {
            name: "updated_tast",
            type: "input",
            message: "enter a new task you want to update it to"
        }
    ]);
    todoList[updTask.index] = updTask.updated_tast;
    console.log(`tast at index no ${updTask.index} updated successfully `);
};
// ------------------------------------delete task---------------------------------------------------
let deleteTask = async () => {
    await view();
    let delIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "please enter the `index no` to deet the task"
        }
    ]);
    let deleteTask = todoList.splice(delIndex.index, 1);
    console.log(`\n ${deleteTask} task has been deleted from your to-do-list \n`);
};
main();
