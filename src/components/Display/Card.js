import React from 'react'
import PropTypes from 'prop-types';
import TopCard from "./TopCard.js";
import UserGroup from "./UserGroup.js";

function Card(props) {

  const { 
    handleChangeName1,
    newName,
    isEditing,
    // handleChangeName,
    defaultTeamName,
    handleEditTeamName,
    isClickOnEditSymbol,
    cardName,
    userTiltle,
    managerTiltle,
    memberIds,
    managerIds,
    id, 
    handleClearTeam 
  } = props;

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
        handleEditTeamName={handleEditTeamName}
        cardName={cardName}
        defaultTeamName={defaultTeamName}
        handleClearTeam={handleClearTeam}
        isClickOnEditSymbol={isClickOnEditSymbol}
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

Card.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  cardName: PropTypes.string
};

export default Card;
