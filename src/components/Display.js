import React from "react";
import Card from "./Card.js";
import "./Draft.css";

export default function Header(props) {
    const { data1, 
        edittingId,
        onClearTeam, 
        userTiltle, 
        managerTiltle, 
        data,
        newName,
        onChangeName,
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
            onChangeName={onChangeName}
            onEditNameTeam={onEditNameTeam}
            onChange={onChange}
            onClickCheckSymbol={onClickCheckSymbol}
            key={post.id}
            userTiltle={userTiltle}
            managerTiltle={managerTiltle}
            cardName={post.name}
            data1={data1}
            {...post}
          />
        )}
      </div>
    )
}