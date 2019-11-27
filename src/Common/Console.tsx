import React from "react";
import "./Console.css";

interface ConsoleProps {
    content?: string;
}

function Console(props: ConsoleProps) {
    return <code className="Code">{props.content}</code>;
}

export { Console };
