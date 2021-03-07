import React from 'react';
import './User.css';

const style = {
    title: {
        fonStyle: "normal",
        color: "#8C1515",
        fontWeight: "bold",
    }
}

function User({ elementNumber, admin }) {
    return (
        <span
            className="img3" 
            style={style.title}>
            {`${elementNumber} ${admin}`}
        </span>
    )
}

export default User;
