import React from 'react'
// import './Icon.css'
import './Draft.css'
const style = {
    p: {
        borderRadius: "40px", 
        height: "50px",
        width: "50px",
    }
};

export default function Icon1(props) {
    return (
        <div>
            <img src="http://webcoban.vn/image/cat-2.jpg" style={style.p}/>
        </div>
    )
}
