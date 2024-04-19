import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const URL =
        "https://smartifai-my.sharepoint.com/personal/sanju_smartifai_ai/_layouts/15/Doc.aspx?sourcedoc={210cc868-5478-497a-9b48-89db4240a40f}&amp;action=embedview&amp;wdAr=1.7777777777777777";

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <iframe
                src={URL}
                width="952px"
                height="576px"
                frameBorder="0"
            ></iframe>
        </>
    );
}

export default App;
