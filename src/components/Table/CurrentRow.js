import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";

function CurrentRow(props){
    const { 
        // status,
        handleSave,
        // isAddOnMoreData,
        newMemberName,
        handleChangeTeamName,
        handleChangeMemberName,
        newTeamName,
        handleSelectOption,
        position,
        newRow,
        // id,
        deleteRow,
        addNewRow
     } = props;

    const [idSelected, setIdSelected] = useState(""); 


    // const actionsArray = [
    //     {
    //         name: "Add more",
    //         buttonType: "success",
    //         handleEvent: handleAddData
    //     },
    //     {           
    //         name: "Save",
    //         buttonType: "info",
    //         handleEvent: handleSave
    //     },
    //     {
    //         name: "Delete",
    //         buttonType: "danger",
    //         handleEvent: "handleDelete"
    //     }
    // ]
     
    function handleAddData(id){
        addNewRow();
        // setIdSelected(id)
        // console.log("Id", id);
    }

    const handleDeleteData = (item) => {
        setIdSelected(item.generateId);
    }

    useEffect(() => {
        deleteRow(idSelected);
    },[deleteRow, idSelected])

    return (
        <>{newRow.map((item)=>(
        <tr key={item.generateId}>
        <td className="text-center format-input-cell">
        <b>{item.ordinalNumber}</b>
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
        <select 
        className="form-control" 
        defaultValue={position} 
        onChange={handleSelectOption}>
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
        defaultValue={newMemberName}
        />
        </td>
        <td>
        <center>
        {/* {actionsArray.map((item)=>(<button 
        className={`btn btn-${item.buttonType}`}
        onClick={item.handleEvent}
        >{item.name}
        </button>))} */}
        <button 
        className="btn btn-info"
        onClick={handleAddData}>
        Add more
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        className="btn btn-success"
        onClick={handleSave}>
        Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        className="btn btn-danger"
        onClick={()=>handleDeleteData(item)}
        >
        Delete
        </button>
        </center>
        </td>
        <td className="text-center">
        <span className={
        (item.status==="Pending")
        ?
        "label label-success"
        :
        (item.status==="Error")
        ?
        "label label-danger"
        :
        null
        }>{item.status}</span>
        </td>        
        </tr>
        ))}</> 
    )
}

const mapStateToProps = state => {
    return {
        newRow: state.TableData 
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addNewRow: () => {
            dispatch(actions.addNewRow())
        },
        deleteRow: (id) => {
            dispatch(actions.deleteRow(id))
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRow);