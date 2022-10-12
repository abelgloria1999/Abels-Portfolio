import React from 'react'

export default function Languages(props){
    return(
        <div className={props.class}>
            <img src={props.flag}/>
            <h3>{props.language}</h3>
        </div>
    )
}