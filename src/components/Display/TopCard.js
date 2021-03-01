import NameTeam from "./NameTeam.js";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import './TopCard.css';
import * as action from "./../../actions/index";

function TopCard(props) {
  const {
    newName,
    handleEditTeamName,
    isClickOnEditSymbol,
    cardName,
    id,
    isEditing,
    deleteTeamById,
    changeNameById,
  } = props;

  const style = {
    icon: {
      color: "green"
    },
  }

  const [value, setValue] = useState(cardName);

  function handleClearTeam() {
    // handleClearTeam && handleClearTeam(id)
    console.log("id", id);
    deleteTeamById(id);
  }

  useEffect(() => {
    setValue("SETA")
  }, [isEditing])

  function handleSaveName(event) {
    handleEditTeamName(id, event);
    console.log("id", id);
    changeNameById(id, value);
  }

  function handleChangeName(e) {
    const { value: newName } = e.target;
    setValue(newName)
  }

  return (
      <div className="topCardStyle"
        isClickOnEditSymbol={isClickOnEditSymbol}>
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

TopCard.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  cardName: PropTypes.string
};

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