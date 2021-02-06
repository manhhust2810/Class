import React from 'react'
import './NameTeam.css'
import './Draft.css'

export default function NameTeam(props) {
    const { cardName } = props;
    return (
        <div className="name">
            <div>{cardName}</div>
        </div>
    )
}
