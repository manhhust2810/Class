import * as types from "../constants/ActionTypes";
import CourseList from "../courseList.json";

const initialState = CourseList ? CourseList : [];

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL_SAMPLE_MEMBERS:
            return state;
        case types.ADD_TASK:
            return state;      
        default: 
            return state; 
    }
};

export default myReducer;