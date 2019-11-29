import React, { PureComponent } from "react";
import {
    WithCodeRunnerProps,
    DropdownKeys,
    DropdownOptions
} from "./withCodeRunner.definitions";
import { Console } from "./Console";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import executeCode from "../utils/execute";

import "./withCodeRunner.css";

/**
 * Remove from T the keys that are in common with K
 */
type Optionalize<T extends K, K> = Omit<T, keyof K>;

export function withCodeRunner<
    T extends WithCodeRunnerProps = WithCodeRunnerProps
>(WrappedComponent: React.ComponentType<T>, dropdownOptions: DropdownOptions) {
    return class ComponentWithCodeRunner extends PureComponent<
        Optionalize<T, WithCodeRunnerProps>
    > {
        state = {
            content: dropdownOptions[DropdownKeys.typescript],
            consoleContent: ""
        };

        onEditorContentChange = (content: string) => {
            this.setState({ content });
        };

        onRunClicked = () => {
            executeCode(this.state.content);
        };

        onClear = () => {
            this.setState({ consoleContent: "" });
        };

        onDropdownChange = (arg: Option) => {
            this.setState({
                content: dropdownOptions[arg.value as DropdownKeys]
            });
        };

        render() {
            return (
                <div className="Editor">
                    <Dropdown
                        options={Object.keys(dropdownOptions)}
                        onChange={this.onDropdownChange}
                        value="typescript"
                    />
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
                        {/* <button className="ClearButton" onClick={this.onClear}>
                            Clear
                        </button> */}
                    </div>
                    {/* <Console content={this.state.consoleContent} /> */}
                </div>
            );
        }
    };
}
