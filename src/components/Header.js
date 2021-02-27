import React, { useState, useEffect, useCallback } from "react";
import './Item.css';
import { connect, useDispatch } from "react-redux";
import * as action from "./../actions/index";
import TodoList from './TodoList';

function Header(props) {
    const { 
        createNewTeam,
        searchAnything
    } = props;

    const dispatch = useDispatch();

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
    const [hidden, setHidden] = useState(true);

    function handleSearchBox(event){
        const { value } = event.target;
        setSearch(value);
        searchAnything(search);
    }

    useEffect(() => { 
        searchAnything(search);
        console.log("search", search);       
    }, [searchAnything, search])

    function processClick1(){
        setHidden(false);
    };

    function processClick2(){
        setHidden(true);
    };

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
        <button 
            className = "my-button"
            onClick={processClick1}>
            DISPLAY TO DO
        </button>
        <button 
            className = "my-button"
            onClick={processClick2}>
            CLOSE LIST
        </button>
        <TodoList    
            hidden={hidden}
        />
    </div>)
}

// const mapStateToProps = state => {
//     return {
//         originData: state.dataMembers
//     }
//   };

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