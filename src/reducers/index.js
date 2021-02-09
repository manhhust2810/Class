import { combineReducers } from "redux";
import dataMembers from "./dataMembers";
import sampleMembers from "./sampleMembers";

const myReducer = combineReducers({
    dataMembers : dataMembers,
    sampleMembers : sampleMembers
});

export default myReducer;