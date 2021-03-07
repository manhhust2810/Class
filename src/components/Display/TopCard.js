import NameTeam from "./NameTeam.js";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./TopCard.css";
import * as action from "./../../actions/index";
import { BsTrashFill } from "react-icons/bs";
import { FaCheckCircle, FaPencilAlt } from "react-icons/fa";
function TopCard(props) {
  const {
    handleEditTeamName,
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
    type: {
      borderBottom: "2px solid #337AB7",
      marginLeft: "50px"
    }
  }

  const [value, setValue] = useState(cardName);

  function handleClearTeam() {
    deleteTeamById(id);
  }

  useEffect(() => {
    setValue(cardName)
  }, [isEditing])

  function handleSaveName(event) {
    handleEditTeamName(id, event);
    changeNameById(id, value);
  }

  function handleChangeName(e) {
    const { value: newName } = e.target;
    setValue(newName)
  }

  return (
      <span className="topCardStyle">
        {(isEditing)
          ?
          <span>
            <input
              type="text"
              onChange={handleChangeName}
              style={style.type}
            />
            <FaCheckCircle 
              className="iconStyle symbolStyle"
              style={style.icon}
              onClick={handleSaveName}
            />
          </span>
          :
          <span>
            <NameTeam
              className="nameStyle"
              cardName={cardName}
            />
            <span className="iconStyle">
              <FaPencilAlt
                className="symbolStyle"
                onClick={handleSaveName} 
              />
              <BsTrashFill
                className="symbolStyle" 
                onClick={handleClearTeam} 
              />
            </span>
          </span>
        }
      </span>)
}

TopCard.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  cardName: PropTypes.string
};

// const mapStateToProps = state => {
//     return {
//       newTeamName: state.DataMembers.name
//     }
// };

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

export default connect(null, mapDispatchToProps)(TopCard);;