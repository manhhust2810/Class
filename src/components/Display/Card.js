import React from "react";
import PropTypes from 'prop-types';
import TopCard from "./TopCard.js";
import UserGroup from "./UserGroup.js";
import { SortableElement } from 'react-sortable-hoc';
function Card(props) {
  const { 
    isEditing,
    handleEditTeamName,
    name,
    id,
    post
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

  const SortableItem = SortableElement(({admin, isEditing, post, id, handleEditTeamName, name}) => {
  return (
    <span className="grid-item">
      <TopCard
        isEditing={isEditing}
        id={id}
        handleEditTeamName={handleEditTeamName}
        name={name}
      />
      {admin.map((item, index) => (
        <UserGroup
          key={index}
          admin={item.mission}
          post={post.[`${item.idTask}`]}
        />
      ))}
    </span>);
  });

  return (<SortableItem 
            index={props.index}
            isEditing={isEditing}
            id={id}
            handleEditTeamName={handleEditTeamName}
            name={name}
            post={post}
            admin={admin}  
          />);
}

Card.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  cardName: PropTypes.string
};

export default Card;
