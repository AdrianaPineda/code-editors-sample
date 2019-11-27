import React from 'react';
import { withCodeRunner } from "../CodeRunner/withCodeRunner";
import { CodeMirrorEditorComponent } from "../Editor/CodeMirror/CodeMirrorEditor";
import { MonacoEditorComponent } from "../Editor/Monaco/MonacoEditor";

export default {
    title: 'Editors Sample',
};

const CodeMirrorEditorWithCodeRunner = withCodeRunner(CodeMirrorEditorComponent);
export const CodeMirrorEditorSample = () => (
    <CodeMirrorEditorWithCodeRunner />
);

const MonacoEditorWithCodeRunner = withCodeRunner(MonacoEditorComponent);
export const MonacoEditorSample = () => <MonacoEditorWithCodeRunner />;
