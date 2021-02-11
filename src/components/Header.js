import React, { useState, useEffect } from "react";
import './Item.css';
import { connect } from "react-redux";

function Header(props) {

    const { 
        handleAddNewTeam,
        handleCreateNew, 
        handleChangeSearchBox,
        dataMembers 
    } = props;

    console.log("dataMembers", dataMembers);

    const [allDataTeam, setAllDataTeam] = useState(dataMembers);
    console.log("allDataTeam", allDataTeam);

    function handleCreateNewTeam(){
        setAllDataTeam([
            ...allDataTeam,
            {
              "id": "null",
              "name": "",
              "creator": "",
              "memberIds": [
              ],
              "managerIds": [
              ]
            },
        ])
        console.log("allDataTeam", allDataTeam)
        handleCreateNew(allDataTeam);
    }

    console.log("allDataTeam", allDataTeam);

    return (
    <div>
        <button
            className = "my-button"
            onClick = {handleCreateNewTeam}>CREATE NEW TEAM</button>
        <input
            className = "my-searchbox"
            onChange = {handleChangeSearchBox}
        />
    </div>)
}

const mapStateToProps = state => {
    return {
      dataMembers: state.dataMembers
    }
  };
  
export default connect(mapStateToProps, null)(Header);
