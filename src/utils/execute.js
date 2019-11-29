// execute.js
import transpile from './transpile';
import compileToJS from "./compile_ts";

export default function executeCode(code) {
    try {
        const result = compileToJS(code);
        (new Function(transpile(result)))();
    } catch (error) {
        console.error(error);
    }
}