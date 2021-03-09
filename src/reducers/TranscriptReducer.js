import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const newRow = [{
    generateId: uuidv4(),
    semester: "",
    courseId: "",
    courseTitle: "",
    credits: "",
    process: "",
    examination: "",
    factor: "",
    action: "",
    point: "",
    grade: "",
    status: "",
}];

const initialState = {
    handleState: [],
    currentState: newRow ? newRow : []
}
    

const TranscriptReducer = (state = initialState, action) => {
    const { process, factor, examination, grade, generateId } = action;
    switch(action.type) {
        case types.CURRENT_ROW:
            return {...state};
        case types.ADD_NEW_ROW:
            return {
                ...state.handleState,
                currentState:  [
                    ...state.currentState,
                    {
                        generateId: uuidv4(),
                        semester: "",
                        courseId: "",
                        courseTitle: "",
                        credits: "",
                        process: "",
                        examination: "",
                        factor: "",
                        action: "",
                        point: "",
                        grade: "",
                        status: "",
                    }
                ]
            };
        case types.DELETE_ROW:
            return {
                ...state.handleState,
                currentState: state.currentState.filter(item => item.generateId !== action.id)
            }
        case types.SAVE_ROW:
            console.log("generateId",generateId)
            const newPoint = { point: `${process*factor+examination*(1-factor)}` };
            const newGrade = { grade: grade };
            const newProcess = { process: process };
            const newExamination = { examination: examination };
            const newFactor = { factor: factor };
            const status = { status: "Pending" };
            return {
                handleState: state.currentState.map((item)=>{
                    if(item.generateId === action.id){
                        return {
                            ...item, 
                            ...newPoint, 
                            ...newGrade, 
                            ...status,
                            ...newProcess,
                            ...newExamination,
                            ...newFactor
                        }
                    }
                    return item;
                }),
                ...state.currentState
            }
        default:
            return {...state}; 
    }
};


export default TranscriptReducer;