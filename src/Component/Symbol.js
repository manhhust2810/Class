import React from 'react'
export default function Symbol({
    onClearTeam
}) {
    return (
        <div onClick={onClearTeam}>
            <div className="fa fa-trash-o"></div>
        </div>
    )
}
