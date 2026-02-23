import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import ErrorBoundary from './errorHandler/ErrorComponent';


function App() {
  return (
    
    <div className="min-h-screen bg-slate-900" data-testid="app-container">
      <Header />
      <ErrorBoundary>
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* useBoolean Demo */}
        <Main />

      </main>

    </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
