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

    // console.log("dataMembers", dataMembers);

    const [allDataTeam, setAllDataTeam] = useState(dataMembers);
    console.log("allDataTeam", allDataTeam);

    function handleCreateNewTeam(allDataTeam, callback){
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
        return callback();
    }

    console.log("allDataTeam", allDataTeam);

    function processClick(){
        handleCreateNewTeam(allDataTeam, function() {
        handleCreateNew(allDataTeam);
        });
    } 

    return (
    <div>
        <button
            className = "my-button"
            onClick = {processClick}>CREATE NEW TEAM</button>
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
