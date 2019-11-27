import React, { PureComponent } from "react";
import { SimpleTypescriptEditor } from "./SimpleTypescriptEditor";
import { CodeMirrorComponent } from "../CodeMirrorEditor/CodeMirrorEditor";
import { Console } from "../Common/Console";

import "./Editor.css";

const code = `// Define Typescript Interface Employee
interface Employee {
    firstName: String;
    lastName: String;
    contractor?: Boolean;
}

// Use Typescript Interface Employee.
// This should show you an error on john
// as required attribute lastName is missing
const john:Employee = {
    firstName:"John",
    lastName:"Smith"
    // contractor:true
}

console.log("Hello there");
`;

export default class Editor extends PureComponent {
    state = {
        content: code,
        consoleContent: ""
    };

    onEditorContentChange = (content: string) => {
        this.setState({ content });
    };

    onRunClicked = () => {
        this.setState({ consoleContent: "test\ntest2\ntest3" });
    };

    onClear = () => {
        this.setState({ consoleContent: "" });
    };

    render() {
        return (
            <div className="Editor">
                Monaco:
                <SimpleTypescriptEditor
                    content={this.state.content}
                    width="100%"
                    height={400}
                    onChange={this.onEditorContentChange}
                />
                <div className="ButtonContainer">
                    <button className="RunButton" onClick={this.onRunClicked}>
                        Run
                    </button>
                    <button className="ClearButton" onClick={this.onClear}>
                        Clear
                    </button>
                </div>
                <Console content={this.state.consoleContent} />
            </div>
        );
    }
}
