import React, { Component } from "react";
import "./CodeMirrorEditor.css";
import { WithCodeRunnerProps } from "../../CodeRunner/withCodeRunner.definitions";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

export interface CodeMirrorEditorProps extends WithCodeRunnerProps {
    options?: any;
}

export class CodeMirrorEditorComponent extends Component<
    CodeMirrorEditorProps
> {
    static defaultProps = {
        options: {
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
            readOnly: false
        }
    };

    render() {
        return (
            <div>
                <CodeMirror
                    className="Editor"
                    value={this.props.content}
                    options={this.props.options}
                    onBeforeChange={(editor, data, value) => {
                        this.props.onChange(value);
                    }}
                    onChange={(editor, data, value) => {}}
                />
            </div>
        );
    }
}
