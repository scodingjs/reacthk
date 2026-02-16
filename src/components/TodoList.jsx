import { useTodoContext } from "../context/TodoContext.jsx";


export default function TodoList() {
    const { todoList, deleteTodo } = useTodoContext()

    return (<>
               <section
            className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30"
            data-testid="todoform"
        >
            <article className="space-y-2">
                {todoList.length === 0 && (
                    <p className="text-slate-500 text-center py-4 italic">No todos yet</p>
                )}
                {todoList.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between gap-3 p-3 
                   bg-slate-800/50 rounded-lg border border-purple-500/20
                   hover:border-purple-500/40 transition-all duration-200"
                    >
                        <p className="text-slate-200 flex-1">{todo.text}</p>
                        <button
                            onClick={e => deleteTodo(todo.id)}
                            className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500 
                     text-red-400 hover:text-white text-sm font-medium
                     rounded-md border border-red-500/40
                     transition-all duration-200"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </article>
        </section>





    </>)
}