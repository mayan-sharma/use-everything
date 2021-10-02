import { useState } from 'react';

const useTodo = () => {
    
    const [todos, setTodos] = useState([]);

    const addTodo = task => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                task,
                isDone: false
            }
        ]);
    }

    const removeTodo = id => {
        const filtered = todos.filter(todo => todo.id !== id);
        setTodos(filtered);
    }

    const handleToggle = id => {
        const toggled = todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
        setTodos(toggled);
    }

    return { todos, addTodo, removeTodo, handleToggle };
}

export default useTodo;