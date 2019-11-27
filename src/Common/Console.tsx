import React from "react";
import "./Console.css";

interface ConsoleProps {
    content?: string;
}

function Console(props: ConsoleProps) {
    return (
        <div className="CodeContainer">
            <code className="Code">{props.content}</code>
        </div>
    );
}

export { Console };
