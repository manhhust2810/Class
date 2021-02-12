import React from "react";
import User from './User.js'
import Icon from './Icon.js'
import './Draft.css'
import './UserGroup.css'

function UserGroup({ dataMembers, admin }) {
  function handleSearchName(value) {
    var item = ((dataMembers.firstName.startsWith(value)) || (dataMembers.lastName.startsWith(value)) ? (dataMembers.firstName.includes(value)) || (dataMembers.lastName.includes(value)) : null)
    return item;
  }
  return (
    <div>
      <User type={dataMembers.length} 
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
                onChange={handleSearchName}
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
                  onChange={handleSearchName}
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

export default UserGroup;
