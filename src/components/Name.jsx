import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Name() {
    const [text] = useTypewriter({
        words: [
            "Aayush Yadav", "Web Dev"
        ],
        loop: true,
        delaySpeed: 1300,
    });

    return (
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#000531" />
            </h1>
        </div>
    );
}
