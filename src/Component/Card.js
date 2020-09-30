import React from 'react'
import './Card.css'
import Top from "./Top.js"
// import Name1 from './Name1.js'
// import Symbol1 from './Symbol1.js'
// import Bin1 from './Bin1.js'
import UserGroup from './UserGroup.js'
// import Manager from './Manager.js'
// import Icon1 from './Icon1.js'
import './Draft.css'
// const style1 = {
//     p1: {
//         fontStyle: "normal",
//         fontWeight: "bold",
//     },
//     p2: {
//         fontSize: "20px",
//         color: "rgb(95, 95, 99)", 
//         fontWeight: "bold",
//     }
// }

export default function Card(props) {
    const { data1, cardName, user, manager, memberIds, managerIds } = props;
    return (
        <div className="training">
            <Top cardName={cardName}/>
            <UserGroup user={user} manager={manager} data1={memberIds} admin={user} />
            <UserGroup user={user} manager={manager} data1={managerIds} admin={manager} />
        </div>
    )
}
