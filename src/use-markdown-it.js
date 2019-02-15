import { useState, useEffect } from "react";
import markdownit from "markdown-it";

export default function useMarkdownit(input, options, plugins) {
    const [text, setText] = useState(input);
   
    useEffect( () => {
        let md = markdownit(options);

        plugins.forEach( (plugin) => {
            md = md.use(plugin);
        });

        setText(md.render(text));
    }

        setText(md.render(text));
    }, [text, options]);


    return text;
}
