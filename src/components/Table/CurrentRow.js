import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
import { v4 as uuidv4 } from 'uuid';

function CurrentRow(props){
    const { 
        status,
        handleSave,
        handleAddMoreData,
        isAddOnMoreData,
        newMemberName,
        handleChangeTeamName,
        handleChangeMemberName,
        newTeamName,
        handleSelectOption,
        position,
        newRow,
        addNewRow
     } = props;

     const [isClickAdd, setIsClickAdd] = useState(isAddOnMoreData);
     const [numberOfRow, setNumberOfRow] = useState(0);
     const [newId, setNewId] = useState("");
     setNewId(uuidv4());

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
     
    function handleAddData(){
        setIsClickAdd(!isClickAdd);
        setNumberOfRow(numberOfRow+1);
        addNewRow();
        console.log("newRow", newRow);
    }

    console.log("isClickAdd", isClickAdd);
    console.log("isAddOnMoreData", isAddOnMoreData);
    console.log(`Bạn đã thêm ${numberOfRow} hàng`, isClickAdd);
    console.log("newRow", newRow)

    return (
        <>{newRow.map((item)=>(
        <tr>
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
        {/* {actionsArray.map((item)=>(<button 
        className={`btn btn-${item.buttonType}`}
        onClick={item.handleEvent}
        >{item.name}
        </button>))} */}
        <button 
        className="btn btn-info"
        onClick={handleAddData}
        >
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
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        addNewRow: () => {
            dispatch(actions.addNewRow())
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRow);