import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { withCodeRunner } from "./CodeRunner/withCodeRunner";
import { CodeMirrorEditorComponent } from "./Editor/CodeMirror/CodeMirrorEditor";
import { MonacoEditorComponent } from "./Editor/Monaco/MonacoEditor";

// Code mirror
// const CodeMirrorEditorWithCodeRunner = withCodeRunner(
//     CodeMirrorEditorComponent
// );
// ReactDOM.render(
//     <CodeMirrorEditorWithCodeRunner />,
//     document.getElementById("root")
// );

// Monaco editor
const MonacoEditorWithCodeRunner = withCodeRunner(MonacoEditorComponent);
ReactDOM.render(
    <MonacoEditorWithCodeRunner />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
