import * as types from "../constants/ActionTypes";
// import sampleMemberData from "../sampleData.json";
import dataMembers from "../allDataMember.json";

// var data = JSON.parse(localStorage.getItem("task"));

// var data = 15;

// var initialState = data ? data : [];

// var initialState = sampleMemberData;

// export default dataMembers = () => dataMembers;

var initialState = dataMembers ? dataMembers : [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL_TEAM_MEMBERS:
            return state;
        case types.CREATE_NEW_TEAM:
            // const newTeam = 
            //     {
            //         "id": "null",
            //         "name": "",
            //         "creator": "",
            //         "memberIds": [
            //         ],
            //         "managerIds": [
            //         ]
            //     }
            // state.push(newTeam);            
            // localStorage.setItem("tasks", JSON.stringify(state));
            return [
                ...state,
                {
                    "id": "null",
                    "name": "",
                    "creator": "",
                    "memberIds": [
                    ],
                    "managerIds": [
                    ]
                } 
            ];
        case types.DELETE_TEAM_BY_ID:
            return state.filter(item => item.id !== action.id);
        case types.CHANGE_NAME_BY_ID:
            const newName = { name: action.value };
            return state.map((item)=>{
                if(item.id === action.id){
                    return {...item, ...newName}
                }
                return item;
            });
        case types.SEARCH_ANYTHING:
            return dataMembers.filter(item => {
                const { memberIds, managerIds } = item;
                const { value } = action;
                const matchUserId = [...memberIds, ...managerIds].filter(({ firstName = "", lastName = "" }) => firstName.includes(value) || lastName.includes(value))
                if (matchUserId.length > 0) {
                    return true;
                }
                return item.name.includes(value);
            });
        default: 
            return state 
    }
};

export default myReducer;