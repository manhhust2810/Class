import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const sample = [{
    generateId: uuidv4(),
    ordinalNumber: "Auto",
    newTeamName: "",
    position: "",
    newMemberName: "",
    action: "",
    status: "",
}];

const initialState = sample ? sample : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CURRENT_ROW:
            return state;
        case types.ADD_NEW_ROW:
            console.log("id", action.id);
            console.log("state", state);  
            return [
                ...state,
                {
                    generateId: uuidv4(),
                    ordinalNumber: "Auto",
                    newTeamName: "",
                    position: "",
                    newMemberName: "",
                    action: "",
                    status: "",
                }
            ];
        case types.DELETE_ROW:
            // console.log("id", action.id);
            return state.filter(item => item.generateId !== action.id);
        case types.UPDATE_NAME:
            const teamName = { newTeamName: action.newTeamName };
            const memberName = { newMemberName: action.newMemberName };
            const status = { status: "Pending" };
            console.log("action", action)
            return state.map((item)=>{
                if(item.generateId === action.id){
                    return {...item, ...teamName, ...memberName, ...status}
                }
                return item;
            });
        // case types.UPDATE_MEMBER_NAME:
            
        //     console.log("action", action)
        //     return state.map((item)=>{
        //         if(item.generateId === action.id){
        //             return {...item, ...memberName}
        //         }
        //         return item;
        //     });
        default:
            return state; 
    }
};

export default myReducer;