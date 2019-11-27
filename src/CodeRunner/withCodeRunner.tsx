import React, { PureComponent } from "react";
import { WithCodeRunnerProps } from "./withCodeRunner.definitions";
import { Console } from "./Console";

import "./withCodeRunner.css";

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

export function withCodeRunner<T extends WithCodeRunnerProps>(
    WrappedComponent: React.ComponentType<T>
) {
    return class ComponentWithCodeRunner extends PureComponent {
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
                    <WrappedComponent
                        {...(this.props as T)}
                        content={this.state.content}
                        onChange={this.onEditorContentChange}
                    />
                    <div className="ButtonContainer">
                        <button
                            className="RunButton"
                            onClick={this.onRunClicked}
                        >
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
    };
}
