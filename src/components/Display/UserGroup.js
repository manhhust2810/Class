import React from "react";
import PropTypes from 'prop-types';
import User from './User.js';
import Icon from './Icon.js';
import './UserGroup.css';
function UserGroup({ admin, postCurrent }) {
  return (
    <span>
      <User
        elementNumber={postCurrent.length} 
        admin={admin}
      />
      <span className="img3">
        {(postCurrent.length <= 6) ?
          <>
            {postCurrent.map((post) => (
              <Icon
                key={post.id}
                email={post.email}
                firstName={post.firstName}
                lastName={post.lastName}
                status={post.status}
              />
            ))}
          </>
          :
          <>
            {postCurrent.map((post, index) => {
              if (index > 4) {
                return null
              }
              return (
                <Icon
                  key={post.id}
                  email={post.email}
                  firstName={post.firstName}
                  lastName={post.lastName}
                  status={post.status}
                />
              )
            })}
            <span className="number iconStyle">
              {`+${postCurrent.length - 5}`}
            </span>
          </>
        }
      </span>
    </span>
  )
}

UserGroup.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  status: PropTypes.string.isRequired
}

export default UserGroup;
