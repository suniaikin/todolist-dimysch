import React, { useState } from "react";
import { FilterValue } from "./App";

export type TaskType = {
    id: string;
    taskTitle: string;
    isDone: boolean;
};

type ListType = {
    listTitle: string;
    tasks: TaskType[];
    removeTask: (id: string) => void;
    updateFilter: (value: FilterValue) => void;
    addTask: (taskTitle: string) => void;
};

export function Todolist(props: ListType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    return (
        <div>
            <h3>{props.listTitle}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e) => {
                        setNewTaskTitle(e.currentTarget.value);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter" && e.ctrlKey) {
                            props.addTask(newTaskTitle);
                            setNewTaskTitle("");
                        }
                    }}
                />
                <button
                    className="buttonAdd"
                    onClick={() => {
                        props.addTask(newTaskTitle);
                        setNewTaskTitle("");
                    }}
                >
                    +
                </button>
            </div>
            <div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone} />
                                <span>{t.taskTitle}</span>
                                <button
                                    className="buttonDelete"
                                    onClick={() => {
                                        props.removeTask(t.id);
                                    }}
                                >
                                    x
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <div className="areaFilter">
                    <button
                        className="buttonFilter"
                        onClick={() => {
                            props.updateFilter("all");
                        }}
                    >
                        All
                    </button>
                    <button
                        className="buttonFilter"
                        onClick={() => {
                            props.updateFilter("active");
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="buttonFilter"
                        onClick={() => props.updateFilter("completed")}
                    >
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
}
