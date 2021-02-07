import React from 'react'
import User from './User.js'
import Icon from './Icon.js'
import './Draft.css'
import './UserGroup.css'

export default function UserGroup({ dataMember, admin }) {
  function handleSearchName(value) {
    var item = ((dataMember.firstName.startsWith(value)) || (dataMember.lastName.startsWith(value)) ? (dataMember.firstName.includes(value)) || (dataMember.lastName.includes(value)) : null)
    return item;
  }
  return (
    <div>
      <User type={dataMember.length} admin={admin} />
      <div
        className="img3"
      >
        {(dataMember.length <= 6) ?
          <>
            {dataMember.map(post => (
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
            {dataMember.map((post, index) => {
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
            <div className="number iconStyle">+{dataMember.length - 5}</div>
          </>
        }
      </div>
    </div>
  )
}
