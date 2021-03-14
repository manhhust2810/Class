import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

function NameTeam({name}){
    return (
        <Span>{name}</Span>
    )
}

const Span = styled.span`
  font-style: normal;
  font-weight: bold;
  color: red;
  margin-left: 50px;
`;
NameTeam.propTypes = {
    name: PropTypes.string
};

export default NameTeam;
