import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
        const message = "hello from renderer";
        console.log(window.api.sendMessage(message));
    };

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    );
}

export default App;
