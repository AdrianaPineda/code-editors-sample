declare module "eval" {
    export default function _eval(
        content: string,
        filename?: string = "",
        scope?: any,
        includeGlobals?: boolean = false
    ): void;
}
