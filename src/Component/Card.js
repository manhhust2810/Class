import React from 'react'
import './Card.css'
import './Draft.css'
import Name from './Name.js'
import Symbol from './Symbol.js'
import Bin from './Bin.js'
import User from './User.js'
import Manager from './Manager.js'
import Icon from './Icon.js'
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

export default function Card(props){
    return (
        <div className="training">
        <ul className="training1">
        <div>
        <Name style={style1.p1} value={props.value} />
        </div>
        <a className="icon2">
        <Symbol className ="fas fa-edit" style={style1.p2} />
        <Bin className ="fa fa-trash-o" style={style1.p2} />
        </a>
        </ul>
        <User />
        <Icon />
        <Manager />
        <Icon />
        </div>
    )
}
