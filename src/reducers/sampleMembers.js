import * as types from "../constants/ActionTypes";
import sampleMembers from "../sampleData.json";

var initialState = sampleMembers ? sampleMembers : [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL_SAMPLE_MEMBERS:
            return state;
        case types.ADD_TASK:
            console.log(action);
            return state;
        case types.ADD_NEW_ROW: 
            const newRow =  {
                ordinalNumber: "Auto",
                newTeamName: "",
                position: "",
                newMemberName: "",
                action: "",
                status: ""
            };
            return newRow;        
        default: 
            return state; 
    }
};

export default myReducer;