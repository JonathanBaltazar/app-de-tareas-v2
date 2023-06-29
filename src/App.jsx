import { useState, useEffect } from "react";
import Form from "./components/Form";
import TasksTable from "./components/TasksTable";

import "./dist/build.css";

// let tasksList = [

//     { name: "mi tarea", done: false },
//     { name: "mi segunda tarea", done: false },
//     { name: "mi tercera tarea", done: false },
// ];

function App() {
    const [tasks, setTasks] = useState([]);
    const [showState, setShowState] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(task) {
        if (tasks.find((t) => t.name === task)) {
            console.log("Estas añadiendo la misma tarea!");
        } else {
            setTasks([...tasks, { name: task, done: false }]);
        }
    }

    function toggleStatus(taskName) {
        setTasks(
            tasks.map((task) => {
                return task.name === taskName
                    ? { ...task, done: !task.done }
                    : task;
            })
        );
    }

    function clearTasks() {
        if (window.confirm("Estas seguro que quieres eliminar las tareas?")) {
            let pendingTasks = tasks.filter((task) => {
                return task.done === false;
            });
            setTasks(pendingTasks);
        }
    }

    return (
        <div className="w-1/4 mt-20 mx-auto">
            <Form addTask={addTask} />
            <TasksTable
                tasks={tasks}
                toggleStatus={toggleStatus}
                tasksStatus={false}
                tableName="Pendientes"
            />

            <div>
                <button
                    onClick={() => {
                        let temp = tasks.filter((task) => {
                            return task.done == true;
                        });
                        if (temp.length > 0) {
                            setShowState(!showState);
                        }
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Tareas completadas
                </button>
                {showState && (
                    <button
                        onClick={clearTasks}
                        className="ml-2 rounded-md font-bold py-2 px-4 bg-red-500 hover:bg-red-700 text-white"
                    >
                        Limpiar tareas
                    </button>
                )}
            </div>

            {showState && (
                <TasksTable
                    tasks={tasks}
                    toggleStatus={toggleStatus}
                    tasksStatus={true}
                />
            )}
        </div>
    );
}

export default App;
