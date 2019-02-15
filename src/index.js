import React from "react";
import useMarkdownit from "./use-markdown-it";

function MarkdownIt({text, options, plugins}) {
    const output = useMarkdownit(text, options, plugins);

    return (
        <div>
            {output}
        </div>
    );
}

export default MarkdownIt;
