import React, { Component } from "react";
import "./CodeMirrorEditor.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

export interface CodeMirrorComponentProps {
    value: string;
    options: any;
    onChange: (content: string) => void;
}
export class CodeMirrorComponent extends Component<CodeMirrorComponentProps> {
    render() {
        return (
            <CodeMirror
                className="Editor"
                value={this.props.value}
                options={this.props.options}
                onBeforeChange={(editor, data, value) => {}}
                onChange={(editor, data, value) => {
                    this.props.onChange(value);
                }}
            />
        );
    }
}
