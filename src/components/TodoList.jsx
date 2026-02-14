import {useTodo} from "../myHooks/useTodo";

export default function TodoList(){
    const {todoList,addTodo,deleteTodo}=useTodo()
    return(<>
    <section>
        <form onSubmit={addTodo}>
            <label>Enter Todo List: </label>
            <input type="text" />
        </form>
        <article>
            {todoList.map((todo) =>
            <div key={id}>
                <p>{todo.text}</p>
                <button onClick={deleteTodo}>Delete todo</button>
            </div>)}
        </article>
    </section>
    </>)
}