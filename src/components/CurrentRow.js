import React from "react";

function CurrentRow(props){
    const { 
        status,
        handleSave,
        handleAddMoreData,
        ordinalNumber,
        newMemberName,
        handleChangeTeamName,
        handleChangeMemberName,
        newTeamName,
        handleSelectOption,
        position
     } = props; 
    return (
        <tr>
        <td className="text-center format-input-cell"><b>{ordinalNumber}</b></td>
        <td className="format-input-cell">
        <input 
        type="text" 
        className="border-input"
        onChange={handleChangeTeamName}
        value={newTeamName}
        />
        </td>
        <td>
        <select className="form-control" value={position} onChange={handleSelectOption}>
            <option value="user">USER</option>
            <option value="manager">MANAGER</option>
            <option value="custormer">CUSTORMER</option>
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
        handleSave={handleSave} 
        onClick={handleSave}>
        Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        className="btn btn-danger">
        Delete
        </button>
        </center>
        </td>
        <td className="text-center">
        <span className={
        (status==="Pending")
        ?
        "label label-success"
        :
        (status==="Error")
        ?
        "label label-danger"
        :
        null
        }>{status}</span>
        </td>        
        </tr>
    )
}

export default CurrentRow;