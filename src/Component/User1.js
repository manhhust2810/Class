import React from 'react'
import './User.css'
import './Draft.css'
const style2 = {
    p3: {
        fonStyle: "normal",
        color: "rgb(95, 95, 99)",
        fontWeight: "bold",
    }
}

export default function User1(props) {
    const { type, admin } = props;
    return (
        <div>
            <ul>
                <div class="training2" style={style2.p3}>{type} {admin} </div>
            </ul>
        </div>
    )
}
