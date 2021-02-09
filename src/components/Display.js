import React from "react";
import Card from "./Card.js";
import "./Draft.css";
import { connect } from "react-redux";

function Display(props){

    const { 
        dataMembers, 
        edittingId,
        onClearTeam, 
        userTiltle, 
        managerTiltle, 
        newName,
        onEditNameTeam,
        handleChangeName,
        onClickCheckSymbol
     } = props;

    return (
        <div className = "my-card">
        {dataMembers.map((post) =>
          <Card
            isEditing={edittingId.includes(post.id)}
            onClearTeam={onClearTeam}
            newName={newName}
            onEditNameTeam={onEditNameTeam}
            onChange={handleChangeName}
            onClickCheckSymbol={onClickCheckSymbol}
            key={post.id}
            userTiltle={userTiltle}
            managerTiltle={managerTiltle}
            cardName={post.name}
            {...post}
          />
        )}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    dataMembers: state.dataMembers
  }
};

export default connect(mapStateToProps, null)(Display);
