import { createContext,useContext, useReducer } from "react";

const TodoContext = createContext();

function todoReducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            return[...state,{id:crypto.randomUUID(),text:action.payload}];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

export const TodoProvider = ({children}) => {
    const [todoList, dispatch ] = useReducer(todoReducer,[])
      const addTodo = (text) => {
       dispatch({type:"ADD_TODO",payload : text})
    }
    const deleteTodo = (todoId)=>{
      dispatch({type:"DELETE_TODO",payload:todoId})
    }
    return(
    <TodoContext.Provider value={{todoList, addTodo, deleteTodo}}>
        {children}
    </TodoContext.Provider>)
}


export const useTodoContext = () => {
   const context = useContext(TodoContext)
   if(!context){
    throw new Error("useTodoContext to be used inside TodoProvider")
   }
   return context

}