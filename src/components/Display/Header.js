import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./../../actions/index";

function Header(props) {
    const { 
        createNewTeam,
        searchAnything,
        setStyleOfCopyRight
    } = props;

    const [search, setSearch] = useState("");
    
    function handleSearchBox(event){
        const { value } = event.target;
        setSearch(value);
        searchAnything(search);
    }

    function handleCreateNewTeam(){
        createNewTeam();
        // setStyleOfCopyRight();
    }

    useEffect(() => { 
        searchAnything(search);   
    }, [searchAnything, search])

    return (
    <span>
        <button
            className = "my-button"
            onClick = {handleCreateNewTeam}>
        CREATE NEW TEAM
        </button>
        <input
            className = "my-searchbox"
            type="text"
            onChange = {handleSearchBox}
            placeholder="Enter Search Word ..."
        />
    </span>)
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createNewTeam: task => {
            dispatch(action.createNewTeam(task));
        },

        searchAnything: (value) => {
            dispatch(action.searchAnything(value));
        }
    }
};
  
export default connect(null, mapDispatchToProps)(Header);