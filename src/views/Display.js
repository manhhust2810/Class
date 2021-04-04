import React, { useState, useEffect } from 'react';
import Card from '../components/Display/Card.js';
import { connect } from 'react-redux';
import { arrayMove } from 'react-sortable-hoc';
// import { NavLink } from "react-router-dom";
import { SortableContainer } from 'react-sortable-hoc';
import * as action from '../actions/index';
import PropTypes from 'prop-types';
// import Gallery from "react-photo-gallery";
// import arrayMove from "array-move";
import Footer from './Footer';
import styled, { css } from 'styled-components';
import Header from '../components/Display/Header';

function Display(props) {
  const { DataMembers, updateList } = props;
  const [lists, setLists] = useState(DataMembers);
  const [copyright, setCopyright] = useState(false);
  // const { match } = props;
  // console.log(match)
  // var url = match.url;
  // const newData = DataMembers.map((item, index) => {
  //   const newKey = { slug: item.name }
  //   return {...item, ...newKey}
  // })

  const [edittingId, setEdittingId] = useState([]);

  const handleEditTeamName = id => {
    const newEdittingId = edittingId.includes(id)
      ? edittingId.filter(item => item !== id)
      : [...edittingId, id];
    setEdittingId(newEdittingId);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setLists(arrayMove(DataMembers, oldIndex, newIndex));
    updateList(lists);
  };

  useEffect(() => {
    if (DataMembers.length <= 3) setCopyright(true);
    else setCopyright(false);
  }, [DataMembers]);

  useEffect(() => {
    updateList(lists);
  }, [updateList, lists]);

  console.log('checkLength', copyright);

  const SortableList = SortableContainer(({ DataMembers }) => {
    return (
      <div className="grid-container">
        {DataMembers.map((post, index) => (
          <Card
            key={post.id}
            isEditing={edittingId.includes(post.id)}
            handleEditTeamName={handleEditTeamName}
            index={index}
            post={post}
            id={post.id}
            {...post}
          />
        ))}
      </div>
    );
  });

  return (
    <span>
      <Header />
      <SortableList
        DataMembers={DataMembers}
        onSortEnd={onSortEnd}
        axis="xy"
        transitionDuration="0"
        helperClass="SortableHelper"
        distance={1}
      />
      <FooterStyle copyright={copyright}>
        <Footer />
      </FooterStyle>
    </span>
  );
}

const FooterStyle = styled.div`
  width: 100%;
  height: 60px;
  background: #1f568b;
  text-align: center;
  padding: 10px;
  color: white;
  ${props =>
    props.copyright
      ? css`
          bottom: 0px;
          position: absolute;
        `
      : css`
          margin-top: 60px;
          position: relative;
        `};
`;

const mapStateToProps = state => {
  return {
    DataMembers: state.DataMembers.currentState
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateList: newList => {
      dispatch(action.updateList(newList));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);

{
  /* <NavLink to={`${url}/${post.slug}`}>
<Card
  isEditing={edittingId.includes(post.id)}
  handleClearTeam={handleClearTeam}
  newName={newName}
  handleEditTeamName={handleEditTeamName}
  key={post.id}
  {...post}
/>
</NavLink> */
}

Display.propTypes = {
  DataMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      creator: PropTypes.string,
      memberIds: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          email: PropTypes.string,
          firstName: PropTypes.string,
          lastName: PropTypes.string,
          status: PropTypes.string
        })
      ),
      managerIds: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          email: PropTypes.string,
          firstName: PropTypes.string,
          lastName: PropTypes.string,
          status: PropTypes.string
        })
      )
    })
  ),
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  handleEditTeamName: PropTypes.func,
  post: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    creator: PropTypes.string,
    memberIds: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        status: PropTypes.string
      })
    ),
    managerIds: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        status: PropTypes.string
      })
    )
  })
};