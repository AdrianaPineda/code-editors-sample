// transpile.js
import * as babel from "@babel/standalone";

const babelOptions = {
    presets: ["es2015"]
}

export default function preprocess(str) {
    const { code } = babel.transform(str, babelOptions);

    return code;
}