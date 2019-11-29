import * as ts from "typescript";

export default function compileToJS(string) {
    let result = ts.transpileModule(string, {
        compilerOptions: { module: ts.ModuleKind.CommonJS }
    });
    return result.outputText;
}