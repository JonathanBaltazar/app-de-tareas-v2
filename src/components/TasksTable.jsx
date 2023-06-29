import { Fragment } from "react";

import TaskRow from "./TaskRow";

function TasksTable({ tasks, toggleStatus, tasksStatus, tableName = null }) {
    function tasksTableStatus(doneValue) {
        let tasksList = tasks.filter((task) => {
            return task.done === doneValue;
        });

        return tasksList.map((task) => {
            return (
                <Fragment key={task.name}>
                    <TaskRow
                        task={task}
                        toggleStatus={toggleStatus}
                        rowStyle={
                            tasks.lenght > 1
                                ? console.log("hay mas de una tarea")
                                : null
                        }
                    />
                </Fragment>
            );
        });
    }

    return (
        <div className="p-2 rounded-md shadow-2xl bg-white my-3">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">{tableName}</th>
                    </tr>
                </thead>
                <tbody>{tasksTableStatus(tasksStatus)}</tbody>
            </table>
        </div>
    );
}

export default TasksTable;
