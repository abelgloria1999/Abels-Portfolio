import React from 'react'

export default function Footer(props){
    return(
        <div className='footer-link'>
            <a href={props.link} target="_blank" ><img src={props.pics}/></a>
        </div>
    )
}
