import React from 'react'
import PropTypes from 'prop-types';
import TopCard from "./TopCard.js";
import UserGroup from "./UserGroup.js";

function Card(props) {
  const { 
    isEditing,
    handleEditTeamName,
    cardName,
    id,
    postCurrent, 
  } = props;

  const admin = [
    {
      mission: "USERS",
      idTask: "memberIds"
    },
    {
      mission: "MANAGERS",
      idTask: "managerIds"
    }
  ];

  return (
    <span className="grid-item">
      <TopCard
        isEditing={isEditing}
        id={id}
        handleEditTeamName={handleEditTeamName}
        cardName={cardName}
      />
      {admin.map((item, index) => (
        <UserGroup
          key={index}
          admin={item.mission}
          postCurrent={postCurrent.[`${item.idTask}`]}
        />
      ))}
    </span>)
}

Card.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  cardName: PropTypes.string
};

export default Card;
