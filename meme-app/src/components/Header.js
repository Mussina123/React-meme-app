import React from "react";
import TrollImg from '../images/troll-logo.png'


export default function Header() {
    return (
        <header className="header"> 
           <img src= {TrollImg} className="header--image" alt='main-logo' />
           <h2 className="header--title">Meme Generator</h2>
           <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}