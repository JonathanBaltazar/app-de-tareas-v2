import React from "react";

function TaskRow({ task, toggleStatus, rowStyle }) {
    return (
        <tr className={rowStyle}>
            <td className="py-4">{task.name}</td>
            <td className="flex justify-end px-2 py-4">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => {
                        toggleStatus(task.name);
                    }}
                />
            </td>
        </tr>
    );
}

export default TaskRow;
