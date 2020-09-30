import React from 'react'
import './Name1.css'
import './Draft.css'

export default function Name1(props){
    const { cardName } = props;
    return (
        <div className="name">
        <div>{cardName} Team</div>
        </div>
    )
}
