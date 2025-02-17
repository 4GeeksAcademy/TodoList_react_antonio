import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        if (e.key === 'Enter' && newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Lista de Tareas</h1>
            <input
                type="text"
                className="form-control mb-3"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleAddTask}
                placeholder="Añadir tarea"
            />
            <ul className="list-group">
                {tasks.length === 0 ? (
                    <li className="list-group-item">No hay tareas, añade una nueva tarea</li>
                ) : (
                    tasks.map((task, index) => (
                        <TodoItem
                            key={index}
                            task={task}
                            onDelete={() => handleDeleteTask(index)}
                        />
                    ))
                )}
            </ul>
            <div className="mt-3">
                {tasks.length} {tasks.length === 1 ? 'tarea' : 'tareas'} pendiente{tasks.length !== 1 && 's'}
            </div>
        </div>
    );
};

export default TodoList;