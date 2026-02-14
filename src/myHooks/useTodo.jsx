import {useState,useCallback} from "react";


export default function useTodo(){
    const [todoList, setTodoList] = useState([])
    const addTodo = (todoText) => {
        const newTodo = {
            id:Math.floor(Math.radon*109999),
            text:todoText
        }
        setTodoList((prev) => [...prev,newTodo])
    }
    const deleteTodo = (todoId)=>{
        const toDoList = todoList.filter((todo) => todo.id !== todoId)
        setTodoList(toDoList)
    }
    return {
        todoList,
        addTodo,
        deleteTodo
    }
}