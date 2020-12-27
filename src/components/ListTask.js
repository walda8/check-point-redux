import React from 'react';
import Todo from './Task';
import { useSelector } from "react-redux";

function ToDoList() {
    const tasks = useSelector(state => state)
    return (
        <div>
            {tasks.map(el => <Todo key={el.id} el={el} />)}
        </div>
    )
}

export default ToDoList