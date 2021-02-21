import React, { useState, useEffect } from "react";
import './Item.css';
import { connect, useDispatch, useSelector } from "react-redux";
import * as action from "./../actions/index";
import { CREATE_NEW_TEAM } from "../constants/ActionTypes";

function Header(props) {
    const { 
        // handleAddNewTeam,
        // handleCreateNew, 
        handleChangeSearchBox,
        createNewTeam
        // dataMembers
    } = props;

    // const dispatch = useDispatch();

    // const [allDataTeam, setAllDataTeam] = useState(dataMembers);
    // console.log("allDataTeam", allDataTeam);

    // function handleCreateNewTeam(allDataTeam){
    //     setAllDataTeam([
    //         ...allDataTeam,
    //         {
    //           "id": "null",
    //           "name": "",
    //           "creator": "",
    //           "memberIds": [
    //           ],
    //           "managerIds": [
    //           ]
    //         },
    //     ])
    // }

    // console.log("allDataTeam", allDataTeam);

    // function createNewTeam(){
    //     handleCreateNewTeam(allDataTeam);
    //     handleCreateNew(allDataTeam);
    // }
    
    // useEffect(()=>{
    //     handleCreateNew(allDataTeam);
    // }, [allDataTeam])

    // const createNewTeam = () => {
    //     dispatch({
    //         type: CREATE_NEW_TEAM
    //     })
    // }

    return (
    <div>
        <button
            className = "my-button"
            onClick = {createNewTeam}
            >
            CREATE NEW TEAM
        </button>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        createNewTeam: (task) => {
            dispatch(action.createNewTeam(task));
        }
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);