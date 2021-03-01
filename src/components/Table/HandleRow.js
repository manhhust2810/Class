import React from "react";
import { connect } from "react-redux";

function HandleRow(props){
    const { 
        status,
        handleSave,
        handleAddMoreData,
        ordinalNumber,
        newMemberName,
        newTeamName,
        position,
        newRow
     } = props;  
    return (
        <>{newRow.map((item)=>
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
        </tr>)}</>
    )
}

const mapStateToProps = state => {
    return {
        newRow: state.TableData 
    }
};

export default connect(mapStateToProps, null)(HandleRow);