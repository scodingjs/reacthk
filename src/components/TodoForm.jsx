import useInput from "../myHooks/useInput.js";
import { useTodoContext } from "../context/TodoContext.jsx";
import useBoolean from "../myHooks/useBoolean";

export default function TodoForm() {
    const { todoValue, onChange, reset } = useInput();
    const { addTodo } = useTodoContext()
    // const {value,setTrue,setFalse,toggle} = useBoolean(true)


    const formSubmit = (e) => {
        e.preventDefault()
        console.log("val", todoValue)
        addTodo(todoValue)
        reset()
    }

    return (<>

        <form onSubmit={formSubmit} className="mt-3 space-y-3">
            <div className="flex flex-col gap-1">
                <label className="text-sm text-rose-300 font-medium">Enter Item To Shopping List:</label>
                <input
                    type="text"
                    value={todoValue}
                    onChange={onChange}
                    placeholder="What needs to be done?"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-rose-500/40 rounded-lg 
                 text-slate-100 placeholder-slate-500
                 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30
                 transition-all duration-200"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-rose-500 hover:bg-rose-600 
               text-white font-semibold rounded-lg
               border border-rose-400/50
               shadow-lg shadow-rose-500/20
               transition-all duration-200 hover:shadow-rose-500/40
               active:scale-[0.98]"
            >
                Add Item
            </button>
        </form>

    </>)
}