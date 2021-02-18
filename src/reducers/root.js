import { combineReducers } from "redux";
import todoList from "./todoList.reducer";
import visibleTodoListFilter from "./visibleTodoFilter.reducer";
import visibleTheme from "./visibleTheme.reducer";
import dataMembers from "./dataMembers";
import sampleMembers from "./sampleMembers";

const rootReducer = combineReducers({ todoList, visibleTodoListFilter, visibleTheme, dataMembers, sampleMembers });
export default rootReducer;