import React from "react";
import Card from "./Card.js";
import "./Draft.css";

export default function Header(props) {
    const { dataMember, 
        edittingId,
        onClearTeam, 
        userTiltle, 
        managerTiltle, 
        data,
        newName,
        onEditNameTeam,
        onChange,
        onClickCheckSymbol
     } = props;
    return (
        <div className="my-card">
        {data.map((post) =>
          <Card
            isEditing={edittingId.includes(post.id)}
            onClearTeam={onClearTeam}
            newName={newName}
            onEditNameTeam={onEditNameTeam}
            onChange={onChange}
            onClickCheckSymbol={onClickCheckSymbol}
            key={post.id}
            userTiltle={userTiltle}
            managerTiltle={managerTiltle}
            cardName={post.name}
            dataMember={dataMember}
            {...post}
          />
        )}
      </div>
    )
}