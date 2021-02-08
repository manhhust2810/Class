import React from "react";

export default function HandleRow(props){
    const { 
        status,
        handleSave,
        handleAddMoreData,
        ordinalNumber,
        newMemberName,
        newTeamName,
        position,
     } = props;  
    return (
        <tr>
            <td className="text-center format-input-cell">
            <b>{ordinalNumber}</b>
            </td>
            <td className="">{newTeamName}</td>
            <td className="text-center">{position.toUpperCase()}</td>
            <td className="text-center">{newMemberName}</td>
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
            className="btn btn-danger">
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