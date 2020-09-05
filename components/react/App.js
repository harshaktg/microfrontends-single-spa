import React,{ useEffect, useState } from "react"

const App = () => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        window.addEventListener('onIncrement', () => {
            setVal(window.myapp.counter);
        });
        window.addEventListener('onDecrement', () => {
            setVal(window.myapp.counter);
        });
    },[])

    return (
        <>
            <h1>Hello from React</h1>
            <p>Counter is {val}</p>
            <input type="button" onClick={() => window.myapp.incrementor()} value="+"></input>
            <input type="button" onClick={() => window.myapp.decrementor()} value="-"></input>
        </>
    )
}

export default App