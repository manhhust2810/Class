import React from "react";
import './NameTeam.css';
import './Draft.css';

function NameTeam(props){

    const { cardName } = props;

    return (
        <div className="nameTeam">
            {cardName}
        </div>
    )
}

export default NameTeam;
