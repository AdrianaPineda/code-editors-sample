import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import { WithCodeRunnerProps } from "../../CodeRunner/withCodeRunner.definitions";
import { withCodeRunner } from "../../CodeRunner/withCodeRunner";

export interface MonacoEditorProps extends WithCodeRunnerProps {
    width?: number | string;
    height?: number | string;
}

export class MonacoEditorComponent extends Component<MonacoEditorProps> {
    static defaultProps = {
        width: "100%",
        height: "450px"
    };

    onChange(newValue: any, e: any) {
        console.log("onChange", newValue, e);
        this.props.onChange(newValue);
    }

    render() {
        const { content, width, height, onChange } = this.props;
        return (
            <MonacoEditor
                width={width}
                height={height}
                language="typescript"
                theme="vs"
                defaultValue=""
                value={content}
                onChange={onChange}
            />
        );
    }
}
