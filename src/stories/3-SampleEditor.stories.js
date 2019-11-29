import React from 'react';
import { withCodeRunner } from "../CodeRunner/withCodeRunner";
import { CodeMirrorEditorComponent } from "../Editor/CodeMirror/CodeMirrorEditor";
import { MonacoEditorComponent } from "../Editor/Monaco/MonacoEditor";

export default {
    title: 'Editors Sample',
};

const typescriptCode = `// Define Typescript Interface Employee
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

console.log("Hello from typescript");

function printJohn(): Employee {
    return john;
}

console.log(printJohn());
`;

const javascriptCode = `// Define JS code

console.log("Hello from javascript");
`;

const dropdownOptions = {
    "typescript": typescriptCode,
    "javascript": javascriptCode
}

const CodeMirrorEditorWithCodeRunner = withCodeRunner(CodeMirrorEditorComponent, dropdownOptions);
export const CodeMirrorEditorSample = () => (
    <CodeMirrorEditorWithCodeRunner />
);

const MonacoEditorWithCodeRunner = withCodeRunner(MonacoEditorComponent, dropdownOptions);
export const MonacoEditorSample = () => <MonacoEditorWithCodeRunner />;
