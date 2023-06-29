import { useState } from "react";
import { VscAdd } from "react-icons/vsc";

function Form({ addTask }) {
    let [task, setTask] = useState("");

    return (
        <form
            method="post"
            onSubmit={(e) => {
                e.preventDefault();
                if (task.length == 0) {
                    alert("No estas ingresando una tarea valida!");
                } else {
                    addTask(task);
                    setTask("");
                }
            }}
            className="flex"
        >
            <input
                type="text"
                placeholder="Guarda tu tarea"
                onChange={(e) => {
                    setTask(e.target.value);
                }}
                value={task}
                className="outline-none flex-grow bg-white px-2"
            />
            <button className="p-4  bg-sky-700">
                <VscAdd />
            </button>
        </form>
    );
}

export default Form;
