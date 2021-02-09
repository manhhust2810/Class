import React from 'react';

function Symbol({
    onClearTeam
}) {
    return (
        <div onClick={onClearTeam}>
            <div className="fa fa-trash-o"></div>
        </div>
    )
}

export default Symbol;
