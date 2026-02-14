
import './index.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {SplitScreen} from "./components/SplitScreen";
import TodoList from './components/TodoList';
const LeftColumnComponent = ({message}) => {
  return(<>
    <h2 style={{backgroundColor:'green'}}>Green{message}</h2>
  </>)
}

const RightColumnComponent = ({message}) => {
  return(<>
    <h2 style={{backgroundColor:'red'}}>Red{message}</h2>
  </>)
}


// function App() {
//   return (
//     <main>
//       <Header />
//      <Main />
//       <SplitScreen left={LeftHandComponent} right={RightHandComponent}
//       leftSize={2} rightSize={5}/>
//       <Footer />
//     </main>
//   )
// }
function App() {
  return (
    <main>
      <Header />
     <Main />
      <SplitScreen 
      leftSize={2} rightSize={5}>
        <LeftColumnComponent message="Hello Javascript!"/>
        <RightColumnComponent message="Hello React!"/>
        </SplitScreen>
       <section>
        <TodoList />
       </section>
      <Footer />
    </main>
  )
}

export default App


