import "./App.css";
import { useEffect, useState } from "react";
import Lista from "./components/Lista";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        task: "Ir a la compra",
        done: false,
      },
      {
        id: 2,
        task: "Hacer ejercicios de react",
        done: true,
      },
    ]
  );

  const createNewTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, task, done: false }]);
  };

  const modifyTask = (index) => {
    console.log(index);
    setTasks(
      [...tasks].map((task) =>
        task.id === index ? { ...task, done: !task.done } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Lista elements={tasks} modifier={modifyTask}></Lista>
      <Form send={createNewTask}></Form>
    </div>
  );
}

export default App;
