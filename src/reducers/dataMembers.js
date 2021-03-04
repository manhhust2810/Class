import * as types from "../constants/ActionTypes";
import dataMembers from "../allDataMember.json";
import { v4 as uuidv4 } from "uuid";

// var data = JSON.parse(localStorage.getItem("task"));

// var initialState = sampleMemberData;

// export default dataMembers = () => dataMembers;

const initialState = dataMembers ? dataMembers : [];

const thisReducer = (state = initialState, action) => {
    const { type, value, id } = action;
    switch(type) {
        case types.LIST_ALL_TEAM_MEMBERS:
            return state;
        case types.CREATE_NEW_TEAM:
            console.log("state", state);       
            // localStorage.setItem("tasks", JSON.stringify(state));            
            // const newTeam = {
            //         "id": uuidv4(),
            //         "name": "",
            //         "creator": "",
            //         "memberIds": [
            //         ],
            //         "managerIds": [
            //         ]
            // }
            // // console.log("count", state.push(newTeam));
            // state.push(newTeam);
            // console.log("state", state);
            // return [...state];
            return [
                ...state,
                {
                    "id": uuidv4(),
                    "name": "",
                    "creator": "",
                    "memberIds": [
                    ],
                    "managerIds": [
                    ]
                } 
            ];
        case types.DELETE_TEAM_BY_ID:
            return state.filter(item => item.id !== id);
        case types.CHANGE_NAME_BY_ID:
            console.log("state", state)
            const newName = { name: value };
            return [...state].map((item)=>{
                if(item.id === id){
                    return {...item, ...newName}
                }
                return item;
            });
        case types.SEARCH_ANYTHING:
            return dataMembers.filter(item => {
                const { memberIds, managerIds } = item;
                const matchUserId = [...memberIds, ...managerIds].filter(({ firstName = "", lastName = "" }) => firstName.includes(value) || lastName.includes(value))
                if (matchUserId.length > 0) {
                    return true;
                }
                return item.name.includes(value);
            });
        default: 
            return state;
    }
};

export default thisReducer;