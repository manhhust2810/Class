import React from 'react'
import './Icon.css'
import './Draft.css'

const style = {
    p: {
        borderRadius: "40px", 
        height: "50px",
        width: "50px",
    },
}
export default function Icon() {
    return (
        <div>
            <i className="img4">
                <img src="http://webcoban.vn/image/cat-2.jpg" style={style.p} />
            </i>
        </div>
    )
}
