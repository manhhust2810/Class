import React from "react";
import Card from "../components/Display/Card.js";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Display(props){
    const { 
        dataMembers, 
        edittingId,
        handleClearTeam, 
        userTiltle, 
        managerTiltle, 
        newName,
        handleEditTeamName,
        handleChangeName1,
     } = props;
    // var { match } = props;
    
    // console.log(match)
    // var url = match.url;
    const newData = dataMembers.map((item, index) => {
      const newKey = { slug: item.name }
      return {...item, ...newKey}
    })
    console.log("newData", newData);
    console.log("dataMembers", dataMembers)

    return (
        <div className = "grid-container">
        {dataMembers.map((post, index) =>
          
          <Card
            isEditing={edittingId.includes(post.id)}
            handleClearTeam={handleClearTeam}
            newName={newName}
            handleEditTeamName={handleEditTeamName}
            handleChangeName1={handleChangeName1}
            key={post.id}
            userTiltle={userTiltle}
            managerTiltle={managerTiltle}
            cardName={post.name}
            {...post}
          />
       
        )}
        </div>)
}

const mapStateToProps = state => {
  return {
    dataMembers: state.dataMembers
  }
};

export default connect(mapStateToProps, null)(Display);

{/* <NavLink to={`${url}/${post.slug}`}>
<Card
  isEditing={edittingId.includes(post.id)}
  handleClearTeam={handleClearTeam}
  newName={newName}
  handleEditTeamName={handleEditTeamName}
  handleChangeName1={handleChangeName1}
  key={post.id}
  userTiltle={userTiltle}
  managerTiltle={managerTiltle}
  cardName={post.name}
  {...post}
/>
</NavLink> */}