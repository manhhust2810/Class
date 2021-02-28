import React from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function NewRow(props) {
    const { 
        status,
        handleSave,
        handleAddMoreData,
        newRow,
        handleChangeTeamName,
        handleChangeMemberName,
        newMemberName,
        newTeamName
     } = props;
     
    function log(){
        console.log("newRow", newRow)
    }
    return (
        <tr>
            <td className="text-center format-input-cell">
            <b>Auto</b>
            </td>
            <td className="format-input-cell">
            <input 
            type="text" 
            className="border-input"
            onChange={handleChangeTeamName}
            value={newTeamName}
            />
            </td>
            <td>
            <select className="form-control">
              <option>USER</option>
              <option>MANAGER</option>
              <option>CUSTORMER</option>
            </select>
            </td>
            <td>
            <input 
            type="text" 
            className="border-input"
            onChange={handleChangeMemberName}
            value={newMemberName}
            />
            </td>
            <td>
            <center>
            <button 
            className="btn btn-info"
            onClick={handleAddMoreData}>
            Add more
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="btn btn-success" 
            onClick={handleSave}
            handleSave={handleSave}>
            Save
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="btn btn-danger"
            onClick={log}
            >
            Delete
            </button>
            </center>
            </td>
            <td className="text-center">
            <span className="label label-primary">{status}</span>
            </td>        
            </tr>
    )
}

const mapStateToProps = state => {
    return {
        newRow: state.sampleMembers
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        createNewTeam: task => {
            dispatch(action.createNewTeam(task));
        },

        searchAnything: (value) => {
            dispatch(action.searchAnything(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRow);