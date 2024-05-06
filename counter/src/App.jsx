import { useState } from "react";
import "./App.css";

function App() {

    let [count, setCount] = useState(5)

    const addValue = () => {
        if (count < 20) {

            count += 1;
            setCount(count);
        }
    }
    const subtractValue = () => {
        if (count > 0) {

            count -= 1;
            setCount(count);
        }
    }

    return (
        <>
            <h1>Count: {count} </h1>

            <button onClick={subtractValue} >-</button>
            <button onClick={addValue} >+</button>
        </>
    )
}

export default App;
