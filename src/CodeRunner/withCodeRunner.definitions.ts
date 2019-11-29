export interface WithCodeRunnerProps {
    content: string;
    onChange: (content: string) => void;
}

export enum DropdownKeys {
    typescript = "typescript",
    javascript = "javascript"
}
export type DropdownOptions = {
    [key in DropdownKeys]: string;
};
