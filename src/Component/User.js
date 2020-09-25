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

export default function User() {
    return (
        <div>
        <ul>
        <div class="training2" style={style2.p3}>12 USERS</div>
        </ul>
        </div>
    )
}
