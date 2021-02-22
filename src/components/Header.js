import React, { useState, useEffect } from "react";
import './Item.css';
import { connect, useDispatch, useSelector } from "react-redux";
import * as action from "./../actions/index";

function Header(props) {
    const { 
        // handleAddNewTeam,
        // handleCreateNew, 
        handleChangeSearchBox,
        createNewTeam,
        searchAnything,
        id,
        value
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

    const [search, setSearch] = useState("");

    function handleSearchBox(event){
        const { value } = event.target;
        setSearch(value);
        searchAnything(search);
    }

    useEffect(() => {  
        searchAnything(search);
        console.log("search", search);
    }, [search])

    return (
    <div>
        <button
            className = "my-button"
            onClick = {createNewTeam}
        >CREATE NEW TEAM
        </button>
        <input
            className = "my-searchbox"
            onChange = {handleSearchBox}
        />
    </div>)
}

// const mapStateToProps = state => {
//     return {
//       dataMembers: state.dataMembers
//     }
//   };

const mapDispatchToProps = (dispatch, props) => {
    return {
        createNewTeam: (task) => {
            dispatch(action.createNewTeam(task));
        },
        searchAnything: (value) => {
            dispatch(action.searchAnything(value));
        }
    }
};
  
export default connect(null, mapDispatchToProps)(Header);