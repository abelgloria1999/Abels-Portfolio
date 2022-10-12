import React from 'react'

export default function Projects(props){
    return(
        <div className='project-card'>
            <img src={props.img} alt="website picture"/>
            <hr/>
            <a href={props.link} target="_blank" ><h3>{props.header}</h3></a>
            <br></br>
            <p>{props.languageUsed}</p>
        </div>
    )
}