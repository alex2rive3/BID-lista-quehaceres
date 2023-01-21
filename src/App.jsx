import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Flex, Input, Item, Spacer } from "./styles";

function App(props) {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);

    const addTask = () => {
        if (!task) return alert("Necesitas una tarea");
        const newTask = {
            id: Math.random(),
            task: task,
            checked: false,
        };
        setListTask([...listTask, newTask]);
        setTask("");
    };

    const removeTask = (id) => {
        const newList = listTask.filter((task) => task.id !== id);
        setListTask(newList);
    };

    const toggleChecked = (id, checked) => {
        const index = listTask.findIndex((task) => task.id === id);
        const newList = listTask;
        newList[index].checked = !checked;
        setListTask([...newList]);
    };

    return (
        <Container>
            <h1 className="title">TODO LIST</h1>
            <Spacer />

            <Flex direction="row">
                <Input
                    value={task}
                    placeholder="Escriba una nueva tarea"
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button onClick={addTask}>Adicionar</Button>
            </Flex>
            <Spacer margin="16px" />

            <ul>
                {listTask.map((task, i) => (
                    <>
                        <Item checked={task.checked} key={task.id}>
                            <p>{task.task}</p>
                            <Flex direction="row" key={i}>
                                <button
                                    key={i + 1}
                                    onClick={() =>
                                        toggleChecked(task.id, task.checked)
                                    }
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>

                                <button onClick={() => removeTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </Flex>
                        </Item>
                        <Spacer margin="12px" />
                    </>
                ))}
            </ul>
        </Container>
    );
}

export default App;
