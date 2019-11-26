import React from "react";
import logo from "./logo.svg";
// import MonacoEditor from "react-monaco-editor";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <MonacoEditor
                    width="800"
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    value="hello there"
                    options={{ selectOnLineNumbers: true }}
                    // onChange={::this.onChange}
                    // editorDidMount={::this.editorDidMount}
                /> */}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
