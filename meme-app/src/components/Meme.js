import React from "react";
import memesData from '../memesData'

export default function Meme(){

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url    
        console.log(url)
    }

    return(
        <main className="meme-container">
            <div className="form">
                <input className="form--input" placeholder="Top-Text" type='text'></input>
                <input className="form--input" placeholder="Bottom-Text" type='text' ></input>
                <button onClick={getMemeImage} className="form--button" >Get a new meme img 🖼</button>
        </div>
        </main> 
    )
}