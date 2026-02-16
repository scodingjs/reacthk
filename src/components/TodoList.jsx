import useTodo from "../myHooks/useTodo.js";
import useInput from "../myHooks/useInput.js";

export default function TodoList(){
    const {todoList,addTodo,deleteTodo}=useTodo()
    const {todoValue, onChange,reset}=useInput();

    const formSubmit = (e) => {
        e.preventDefault()
        addTodo(todoValue)
        reset()
    }

    return(<>
    <section className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30"
      data-testid="todoform">
        <form onSubmit={formSubmit}>
            <label>Enter Todo List: </label>
            <input type="text" onChange={(e) => onChange(e)} />
        </form>
        <article>
            {todoList.map((todo,id) =>
            <div key={id}>
                <p>{todo.text}</p>
                <button onClick={deleteTodo}>Delete todo</button>
            </div>)}
        </article>
    </section>
    </>)
}