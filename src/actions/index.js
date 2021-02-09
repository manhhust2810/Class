import * as types from "../constants/ActionTypes";

export const listAllSampleMembers = () => {
    return {
        type : types.LIST_ALL_SAMPLE_MEMBERS
    }
};

export const listAllTeamMembers = () => {
    return {
        type : types.LIST_ALL_TEAM_MEMBERS
    }
};

export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task: task
    }
};
