import React from 'react'
import './Item.css'
// import './Draft.css'
export default function Header(props) {
    const { onClick, onChange } = props;
    return (
        <div>
            <button
                className="my-button"
                onClick={onClick}>CREATE NEW TEAM</button>
            <input
                className="my-searchbox"
                onChange={onChange}
            />
        </div>
    )
}
