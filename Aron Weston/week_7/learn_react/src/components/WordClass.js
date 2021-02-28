import React from "react"

const getRandomWord = async () => {
    try {
        const word = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
        const returnWord = await word.json();
        console.log(returnWord);
        return returnWord;
    } catch (error) {
        console.error(error);
    }
}

export default class WordClass extends React.Component {

    constructor() {
        super();
        this.state = {
            word: ""
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Hello World</h1>
                <div>Word: {this.state.word}</div>
                <button onClick={() => getRandomWord()
                    .then(data => this.setState({ word: data[0] })

                )}>Get Random Word</button>
            </div>
        )
    }
}
