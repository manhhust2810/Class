import NameTeam from "./NameTeam.js";
import React, { useEffect, useState } from "react";
import './TopCard.css';

function TopCard(props) {
  const {
    newName,
    handleEditTeamName,
    onChange,
    onEditNameTeam,
    isClickOnEditSymbol,
    cardName,
    onClearTeam,
    onClick,
    id,
    isEditing,
    handleChangeName1,
  } = props;

  const style = {
    icon: {
      color: "green"
    }
  }

  const [value, setValue] = useState(cardName);

  useEffect(() => {
    setValue("SETA")
  }, [isEditing])

  function handleClickEditNameTeam(event) {
    onEditNameTeam(id, event)
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
                onClick={onClick}
                // onClearTeam={onClearTeam}
                >
              </div>
            </div>
          </>
        }
      </div>)
}

export default TopCard;