import React from 'react'
import './Card.css'
import TopCard from "./TopCard.js"
import UserGroup from './UserGroup.js'
import './Draft.css'

export default function Card(props) {
  const { 
    onClickCheckSymbol,
    newName,
    isEditing,
    onChange,
    defaultTeamName,
    // onChangeName, 
    onEditNameTeam,
    // data1,
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
    // if (onClearTeam) {
    //   onClearTeam(id);
    // }
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

  return (
    <div className="training">
      <TopCard
        isEditing={isEditing}
        id={id}
        newName={newName}
        onEditNameTeam={onEditNameTeam}
        cardName={cardName}
        // onChange={handleSearchName}
        // onChangeNameTeam={handleChangeName}
        defaultTeamName={defaultTeamName}
        onClick={handleClearTeam}
        // onChangeName={handleChangeTeamName}
        isClickOnEditSymbol={isClickOnEditSymbol}
        onChange={onChange}
        onClickTickSymbol={onClickCheckSymbol}
      />
      <UserGroup
        // userTiltle="Admin"
        managerTiltle={managerTiltle}
        dataMembers={memberIds}
        admin={userTiltle}
      // onChange={handleSearchName}
      />
      <UserGroup
        // userTiltle="User"
        managerTiltle={managerTiltle}
        dataMembers={managerIds}
        admin={managerTiltle}
      // onChange={handleSearchName}
      />
    </div>
  )
}
