import React from 'react'
// import './Card.css'
import TopCard from "./TopCard.js";
import UserGroup from "./UserGroup.js";
// import "./Draft.css";

function Card(props) {

  const { 
    handleChangeName1,
    newName,
    isEditing,
    onChange,
    defaultTeamName,
    onEditNameTeam,
    isClickOnEditSymbol,
    cardName,
    userTiltle,
    managerTiltle,
    memberIds,
    managerIds,
    id, 
    onClearTeam 
  } = props;

  function handleClearTeam() {
    onClearTeam && onClearTeam(id);
  }
  
  // function handleSearchName(value) {
  //   var item = ((data1.firstName.startsWith(value)) || (data1.lastName.startsWith(value)) ? (data1.firstName.includes(value)) || (data1.lastName.includes(value)) : null)
  //   return item;
  // }

  // function handleChangeTeamName() {
  //   // onChangeName && onChangeName(id);
  //   if (onChangeName) {
  //     onChangeName(id);
  //   }
  // }

  // function handleChangeName() {
  //   if (onChangeName) {
  //     onChangeName(id);
  //   }
  // }
//training
  return (
    <div className="grid-item">
      <TopCard
        isEditing={isEditing}
        id={id}
        newName={newName}
        onEditNameTeam={onEditNameTeam}
        cardName={cardName}
        defaultTeamName={defaultTeamName}
        onClick={handleClearTeam}
        isClickOnEditSymbol={isClickOnEditSymbol}
        onChange={onChange}
        handleChangeName1={handleChangeName1}
      />
      <UserGroup
        managerTiltle={managerTiltle}
        dataMembers={memberIds}
        admin={userTiltle}
      />
      <UserGroup
        managerTiltle={managerTiltle}
        dataMembers={managerIds}
        admin={managerTiltle}
      />
    </div>)
}

export default Card;
