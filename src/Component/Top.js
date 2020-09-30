import Symbol1 from './Symbol1.js'
import Name1 from './Name1.js'
import Bin1 from './Bin1.js'
import React from 'react'
import './Draft.css'
const style1 = {
    p1: {
        fontStyle: "normal",
        fontWeight: "bold",
    },
    p2: {
        fontSize: "20px",
        color: "rgb(95, 95, 99)",
        fontWeight: "bold",
    }
}
export default function Top(props) {
    const { cardName } = props;
    return (
        <div>
            <ul className="training1">
                <div>
                    <Name1 style={style1.p1} cardName={cardName} />
                </div>
                <a className="icon2">
                    <Symbol1 className="fas fa-edit" style={style1.p2} />
                    <Bin1 className="fa fa-trash-o" style={style1.p2} />
                </a>
            </ul>
        </div>
    )
}