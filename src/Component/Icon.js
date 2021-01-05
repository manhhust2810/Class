import React from 'react'
// import './Icon.css'
import './Draft.css'
const style = {
    icon: {
        borderRadius: "40px",
        height: "50px",
        width: "50px",
    }
};
export default function Icon() {
    return (
        <div>
            <img 
            src="http://webcoban.vn/image/cat-2.jpg" 
            style={style.icon} 
            alt=""
            />
        </div>
    )
}
