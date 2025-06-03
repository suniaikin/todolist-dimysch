import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { TaskType } from "./Todolist";

export type FilterValue = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, taskTitle: "Terminator", isDone: true },
        { id: 2, taskTitle: "XXX", isDone: false },
        { id: 3, taskTitle: "Pulp Fiction", isDone: false },
    ]);

    let [filter, setFilter] = useState<FilterValue>("all");

    function removeTask(id: number) {
        let removeTask = tasks.filter((t) => t.id !== id);
        setTasks(removeTask);
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
            />
        </div>
    );
}

export default App;
