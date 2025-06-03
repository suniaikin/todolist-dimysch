import React from "react";
import { FilterValue } from "./App";

export type TaskType = {
    id: number;
    taskTitle: string;
    isDone: boolean;
};

type ListType = {
    listTitle: string;
    tasks: TaskType[];
    removeTask: (id: number) => void;
    updateFilter: (value: FilterValue) => void;
};

export function Todolist(props: ListType) {
    return (
        <div>
            <h3>{props.listTitle}</h3>
            <div>
                <input />
                <button className="buttonAdd">+</button>
            </div>
            <div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li>
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
