import React from "react";
import PropTypes from 'prop-types';
import User from './User.js'
import Icon from './Icon.js'
// import './Draft.css'
import './UserGroup.css'

function UserGroup({ dataMembers, admin }) {
  return (
    <div>
      <User 
        type={dataMembers.length} 
        admin={admin}  
      />
      <div
        className="img3"
      >
        {(dataMembers.length <= 6) ?
          <>
            {dataMembers.map(post => (
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
            {dataMembers.map((post, index) => {
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
            <div className="number iconStyle">+{dataMembers.length - 5}</div>
          </>
        }
      </div>
    </div>
  )
}

UserGroup.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  status: PropTypes.string.isRequired
  // handleSearchName: PropTypes.func
}

export default UserGroup;
