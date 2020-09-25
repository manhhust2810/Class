import React from 'react'
import './Name.css'
import './Draft.css'

export default function Name(props){
    return (
        <div className="name">
        <div>{props.value}</div>
        </div>
    )
}
