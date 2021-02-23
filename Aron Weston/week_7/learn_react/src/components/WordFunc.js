import React, { useState } from "react"

const getRandomWord = async () => {
    try {
        const word = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
        const returnWord = await word.json();
        console.log(returnWord[0]);
        return returnWord;
    } catch (error) {
        console.error(error);
    }
};

export default function WordFunc() {

    const [word, setWord] = useState("");
    return (
        <div className="container">
            <h1>Hello World</h1>
            <div>Word: {word}</div>
            <button onClick={() => getRandomWord().then(data=>setWord(data))}>Get Random Word</button>
        </div>
    )
}