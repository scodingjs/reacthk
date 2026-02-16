import { SplitScreen } from './SplitScreen';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";
import { TodoProvider } from "../context/TodoContext.jsx";

const LeftColumnComponent = ({ message }) => {
  return (
    <div
      className="p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30"
      data-testid="left-column"
    >
      <h3 className="text-emerald-400 font-semibold mb-2">Existing ToDo's</h3>
      <p className="text-slate-300">{message}</p>
      <TodoList />
    </div>
  );
};

const RightColumnComponent = ({ message }) => {
  return (
    <div
      className="p-4 bg-rose-500/20 rounded-xl border border-rose-500/30"
      data-testid="right-column"
    >

      <TodoForm />
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <TodoProvider>
        <SplitScreen leftSize={4} rightSize={3}>
          <LeftColumnComponent message="" />
          <RightColumnComponent message="" />
        </SplitScreen>

      </TodoProvider>


    </main>
  )
}

export default Main;
