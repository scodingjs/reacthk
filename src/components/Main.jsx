import useBoolean from "../myHooks/useBoolean";

const Main = () => {
    const {value,setTrue,setFalse,toggle} = useBoolean(true)
    return(
        <main>
           <p>Value = {value}</p>
           <button onClick={setTrue}>Set True</button>
           <button onClick={setFalse}>Set False</button>
           <button onClick={toggle}>Toggle</button>
           {value ?
           <p>Green</p> :
           <p>Red</p>}
        </main>
    )
}

export default Main;
