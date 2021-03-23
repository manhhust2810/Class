import { combineReducers } from "redux";
import ColorsReducer from './ColorsReducer';
import GradientsReducer from './GradientsReducer';
import SettingsReducer from './SettingsReducer';
import todoList from "./todoList.reducer";
import visibleTodoListFilter from "./visibleTodoFilter.reducer";
import visibleTheme from "./visibleTheme.reducer";
import DataMembers from "./DataMembers";
import sampleMembers from "./sampleMembers";
import TranscriptReducer from "./TranscriptReducer";
import { TaskReducer } from "./TaskReducer";
import { TaiKhoanReducer } from './TaiKhoanReducer';

const rootReducer = combineReducers({
    colors: ColorsReducer,
    gradients: GradientsReducer,
    settings: SettingsReducer,
    todoList,
    visibleTodoListFilter, 
    visibleTheme, 
    DataMembers,
    sampleMembers,
    TranscriptReducer, 
    TaskReducer,
    TaiKhoanReducer
});

export default rootReducer;