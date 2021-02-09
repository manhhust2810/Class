import React from "react";
import './Item.css';

function Header(props) {

    const { handleAddNewTeam, handleChangeSearchBox } = props;

    return (
        <div>
            <button
                className = "my-button"
                onClick = {handleAddNewTeam}>CREATE NEW TEAM</button>
            <input
                className = "my-searchbox"
                onChange = {handleChangeSearchBox}
            />
        </div>
    )
}

export default Header;
