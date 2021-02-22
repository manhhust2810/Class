import NameTeam from "./NameTeam.js";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import './TopCard.css';
import * as action from "./../actions/index";
import { DELETE_TEAM_BY_ID } from "../constants/ActionTypes";

function TopCard(props) {
  const {
    newName,
    handleEditTeamName,
    onChange,
    onEditNameTeam,
    isClickOnEditSymbol,
    cardName,
    id,
    // onClearTeam,
    // onClick,
    isEditing,
    handleChangeName1,
    // handleClearTeam,
    deleteTeamById,
    changeNameById,
    newTeamName
  } = props;

  const style = {
    icon: {
      color: "green"
    }
  }

  const [value, setValue] = useState(cardName);

  function handleClearTeam() {
    // handleClearTeam && handleClearTeam(id);
    deleteTeamById(id);
  }

  useEffect(() => {
    setValue("SETA")
  }, [isEditing])

  function handleSaveName(event) {
    onEditNameTeam(id, event)
    console.log("id", id)
    changeNameById(id, value);
  }

  function handleChangeName(e) {
    const { value: newName } = e.target;
    setValue(newName)
  }

  // function handleSaveName(id, value) {
  //   console.log("id", id)
  //   console.log("value", value)
  //   changeNameById(id, value);
  // }

  return (
      <div className="topCardStyle"
        isClickOnEditSymbol={isClickOnEditSymbol}
        // newName={newName}
      >
        {(isEditing)
          ?
          <>
            <input
              type="text"
              newName={newName}
              onChange={handleChangeName}
            />
            <div
              className="iconStyle fas fa-check-circle symbolStyle"
              style={style.icon}
              onClick={handleSaveName}
            >
            </div>
          </>
          :
          <>
            <NameTeam
              className="nameStyle"
              cardName={cardName}
            />
            <div className="iconStyle">
              <div className="fas fa-edit symbolStyle"
                onClick={handleSaveName}>
              </div>
              <div className="fa fa-trash-o symbolStyle"
                onClick={handleClearTeam}
                >
              </div>
            </div>
          </>
        }
      </div>)
}

const mapStateToProps = state => {
    return {
      newTeamName: state.dataMembers.name
    }
  };

const mapDispatchToProps = (dispatch, props) => {
  return {
      deleteTeamById: (id) => {
        dispatch(action.deleteTeamById(id));
      },
      changeNameById: (id, value) => {
        dispatch(action.changeNameById(id, value));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopCard);;