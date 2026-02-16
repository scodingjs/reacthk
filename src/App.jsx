import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { SplitScreen } from './components/SplitScreen';
import TodoList from './components/TodoList';

const LeftColumnComponent = ({ message }) => {
  return (
    <div 
      className="p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30"
      data-testid="left-column"
    >
      <h3 className="text-emerald-400 font-semibold mb-2">Left Panel</h3>
      <p className="text-slate-300">{message}</p>
    </div>
  );
};

const RightColumnComponent = ({ message }) => {
  return (
    <div 
      className="p-4 bg-rose-500/20 rounded-xl border border-rose-500/30"
      data-testid="right-column"
    >
      <h3 className="text-rose-400 font-semibold mb-2">Right Panel</h3>
      <p className="text-slate-300">{message}</p>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900" data-testid="app-container">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* useBoolean Demo */}
        <Main />

        {/* SplitScreen Pattern Demo */}
        <section className="my-8" data-testid="splitscreen-demo">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 px-6">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            SplitScreen Pattern Demo
          </h2>
          <SplitScreen leftSize={2} rightSize={3}>
            <LeftColumnComponent message="Hello JavaScript! This demonstrates the compound component pattern." />
            <RightColumnComponent message="Hello React! Children are passed as an array and destructured." />
          </SplitScreen>
        </section>

        {/* Todo List with useTodo & useInput hooks */}
        <section className="my-8" data-testid="todolist-demo">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 px-6">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            useTodo & useInput Hooks Demo
          </h2>
          <TodoList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
