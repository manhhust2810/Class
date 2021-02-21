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
    deleteTeamById
  } = props;

  const style = {
    icon: {
      color: "green"
    }
  }

  const dispatch = useDispatch();

  const [value, setValue] = useState(cardName);

  // const [idDeleted, setIdDeleted] = useState("");

  function handleClearTeam() {
    // handleClearTeam && handleClearTeam(id);
    // console.log("id", id);
    deleteTeamById(id);
  }

  useEffect(() => {
    setValue("SETA")
  }, [isEditing])

  function handleClickEditNameTeam(event) {
    onEditNameTeam(id, event)
    console.log("id", id)
  }

  function handleChangeName(e) {
    const { value: newName } = e.target;
    setValue(newName)
  }

  function handleClickTickSymbol() {
    // console.log(id, value)
    handleChangeName1(id, value)
  }

  return (
      <div className="topCardStyle"
        isClickOnEditSymbol={isClickOnEditSymbol}
        newName={newName}
      >
        {(isEditing)
          ?
          <>
            <input
              type="text"
              newName={newName}
              onChange={handleChangeName}
              onClick={handleEditTeamName}
            />
            <div
              className="iconStyle fas fa-check-circle symbolStyle"
              style={style.icon}
              onChange={onChange}
              onClick={handleClickTickSymbol}
              newName={newName}
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
                onClick={handleClickEditNameTeam}>
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

// const mapStateToProps = state => {
//     return {
//       dataMembers: state.dataMembers
//     }
//   };

const mapDispatchToProps = (dispatch, props) => {
  return {
      deleteTeamById: (id) => {
        dispatch(action.deleteTeamById(id));
      }
  }
};

export default connect(null, mapDispatchToProps)(TopCard);;