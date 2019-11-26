import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";

export interface EditorProps {
    content: string;
    width: number | string;
    height: number | string;
    onChange: (content: string) => void;
}

export class SimpleTypescriptEditor extends Component<EditorProps> {
    constructor(props: any) {
        super(props);
    }

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
