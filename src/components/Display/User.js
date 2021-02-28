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

function User(props) {
    const { type, admin } = props;
    return (
        <div className="img3" style={style2.p3}>{type} {admin} </div>
    )
}

export default User;
