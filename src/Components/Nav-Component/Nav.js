import React from 'react'

export default function Nav(){
    return(
        <nav className='nav-container'>
            <a href="#">
                <img src="./images/nav-logo.png" alt="nav-logo"></img>
            </a>
            <ul className='nav-items'>
                <li><a href='#aboutMe-section'>About Me</a></li>
                <li><a href='#skills-section'>Skills</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href='#language-section'>Languages</a></li>
            </ul>
        </nav>
    )
}