import React from "react";
import PropTypes from "prop-types";
import "./NameTeam.css";

function NameTeam({cardName}){
    return (
        <span className="nameTeam">
            {cardName}
        </span>
    )
}

NameTeam.propTypes = {
    cardName: PropTypes.string
};

export default NameTeam;
