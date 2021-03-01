import { combineReducers } from "redux";
import todoList from "./todoList.reducer";
import visibleTodoListFilter from "./visibleTodoFilter.reducer";
import visibleTheme from "./visibleTheme.reducer";
import dataMembers from "./dataMembers";
import sampleMembers from "./sampleMembers";
import TableData from "./TableData";
import { TaskReducer } from "./TaskReducer";

const rootReducer = combineReducers({ 
    todoList, 
    visibleTodoListFilter, 
    visibleTheme, 
    dataMembers, 
    sampleMembers,
    TableData, 
    TaskReducer 
});
export default rootReducer;