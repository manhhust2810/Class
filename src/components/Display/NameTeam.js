import React from "react";
import PropTypes from 'prop-types';
import './NameTeam.css';
import './Draft.css';

function NameTeam({cardName}){
    return (
        <div className="nameTeam">
            {cardName}
        </div>
    )
}

NameTeam.propTypes = {
    cardName: PropTypes.string
};

export default NameTeam;
