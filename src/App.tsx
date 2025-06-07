import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { TaskType } from "./Todolist";
import { v1 } from "uuid";

export type FilterValue = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), taskTitle: "Terminator", isDone: true },
        { id: v1(), taskTitle: "XXX", isDone: false },
        { id: v1(), taskTitle: "Pulp Fiction", isDone: false },
    ]);

    let [filter, setFilter] = useState<FilterValue>("all");

    function removeTask(id: string) {
        let removeTask = tasks.filter((t) => t.id !== id);
        setTasks(removeTask);
    }

    function addTask(taskTitle: string) {
        let newTask = {
            id: v1(),
            taskTitle: taskTitle,
            isDone: false,
        };
        let newTasks: TaskType[] = [...tasks, newTask];
        setTasks(newTasks);
    }

    function updateFilter(value: FilterValue) {
        setFilter(value);
    }

    let filteredTasks = tasks;
    if (filter === "completed") {
        filteredTasks = tasks.filter((t) => t.isDone === true);
    }
    if (filter === "active") {
        filteredTasks = tasks.filter((t) => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist
                listTitle={"What to watch"}
                tasks={filteredTasks}
                removeTask={removeTask}
                updateFilter={updateFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
