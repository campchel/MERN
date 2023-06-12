import React, { useState } from 'react';

const TodoList = (props) => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]); 

    const SubmitHandler = (e) => {
        e.preventDefault();
        const NewTask = { 
            id: Date.now(),
            text: task,
            completed: false,
        };
        setList([...list, NewTask]); 
        e.target.task.value = "";

    }

    const ChangeHandler = (e) => { 
        setTask(e.target.value)
    }

    const CompletedBox = (taskId) => { 
        setList(list.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }))
    }
    const DeleteHandler = (taskId) => {
        setList(list.filter(task => task.id !== taskId));
    }

    return (
        <>
            <div className="container-input" >
                <form type="submit" onSubmit={SubmitHandler} >
                    <input id="task" type="text" onChange={ChangeHandler} />
                    <button className="add-btn" type="submit">Add</button>
                </form>
            </div>
            <>
                <div className="todoList">
                    {list.map((task, index) => {
                        return (

                            <ul className="container-list" key={task.id}>
                                <li key={index}>
                                    <input type="checkbox" onChange={() => CompletedBox(task.id)} />

                                    <span className={task.completed ? "completed" : ""}>{task.text}</span>

                                    <button className="delete-btn" onClick={() => DeleteHandler(task.id)}>Delete</button>

                                </li>
                            </ul>
                        )
                    })}
                </div>
            </>
        </>
    )
};

export default TodoList