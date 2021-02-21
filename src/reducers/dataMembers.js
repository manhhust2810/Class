import * as types from "../constants/ActionTypes";
// import sampleMemberData from "../sampleData.json";
import dataMembers from "../allDataMember.json";

// var data = JSON.parse(localStorage.getItem("task"));

// var data = 15;

// var initialState = data ? data : [];

// var initialState = sampleMemberData;

// export default dataMembers = () => dataMembers;

var initialState = dataMembers ? dataMembers : [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL_TEAM_MEMBERS:
            return state;
        case types.CREATE_NEW_TEAM:
            const newTask = 
                {
                    "id": "null",
                    "name": "",
                    "creator": "",
                    "memberIds": [
                    ],
                    "managerIds": [
                    ]
                }
            state.push(newTask);
            console.log("newTask",newTask)               
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        default: 
            return state; 
    }
};

export default myReducer;