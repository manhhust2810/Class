import React from "react";
export default function NewRow(props) {
    const { 
        status,
        handleSaveOnSuccess,
        handleAddMoreData,
        ordinalNumber
     } = props;   
    return (
        <tr>
            <td className="text-center format-input-cell">
            <b>{ordinalNumber}</b>
            </td>
            <td className="format-input-cell">
            <input type="text" className="border-input"/>
            </td>
            <td>
            <select className="form-control">
              <option>USER</option>
              <option>MANAGER</option>
              <option>CUSTORMER</option>
            </select>
            </td>
            <td>
            <input type="text" className="border-input"/></td>
            <td>
            <center>
            <button 
            className="btn btn-info"
            onClick={handleAddMoreData}>
            Add more
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="btn btn-success" 
            onClick={handleSaveOnSuccess}>
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