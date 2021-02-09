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
        case types.LIST_ALL:
            return state;
        default: 
            return state; 
    }
};

export default myReducer;