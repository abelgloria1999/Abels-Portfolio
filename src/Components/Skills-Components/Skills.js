import React from 'react'

export default function Skill(props){
    return(
        <div className='skill-item'>
                <img src={props.skill_image} alt="Code Language Logo" />
                <h3>{props.skill}</h3>
        </div>
    )
}