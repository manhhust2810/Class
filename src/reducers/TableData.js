import * as types from "../constants/ActionTypes";

const sample = [{
    ordinalNumber: "Auto",
    newTeamName: "",
    position: "",
    newMemberName: "",
    action: "",
    status: ""
}];

const initialState = sample ? sample : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CURRENT_ROW:
            return state;
        case types.ADD_NEW_ROW: 
            return [
                ...state,
                {
                    ordinalNumber: "Auto",
                    newTeamName: "",
                    position: "",
                    newMemberName: "",
                    action: "",
                    status: ""
                }
            ];        
        default: 
            return state; 
    }
};

export default myReducer;