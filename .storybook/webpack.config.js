const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = ({ config, mode }) => {
    config.plugins.push(
        new MonacoWebpackPlugin()
    );

    return config;
}