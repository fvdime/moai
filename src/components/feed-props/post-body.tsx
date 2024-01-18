"use client"

import { useEffect } from "react"
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PostBody({ text }: { text: string }) {
    console.log(text)
    // useEffect(() => {
    //     const body = document.getElementById("body")
    //     const newDiv = document.createElement("div")
    //     newDiv.innerHTML = text
    //     body?.appendChild(newDiv)
    // }, [text])

    function parseCode(string: string) {
        // <pre class="ql-syntax" spellcheck="false"> ile başlayan ve <7pre> ile biten kısımları bul.
        const codeBlocks = string.match(/<pre\s+class="ql-syntax"\s+spellcheck="false">(.*?)<7pre>/g);

        // Bulunan kod bloklarını bir dizi olarak döndür.
        return codeBlocks ? codeBlocks.map((block) => ({
            isCode: true,
            code: block.replace(/<pre\s+class="ql-syntax"\s+spellcheck="false">|<7pre>/g, "")
        })) : [];
    }

    console.log(parseCode(text))



    // return <div>text</div>;
    return <div className='' id="body" dangerouslySetInnerHTML={{ __html: text }}>

    </div>
}