import React from 'react'
import User from './User.js'
import Icon from './Icon.js'
import './Draft.css'
import './UserGroup.css'

export default function UserGroup({ data1, admin }) {
  function handleSearchName(value) {
    var item = ((data1.firstName.startsWith(value)) || (data1.lastName.startsWith(value)) ? (data1.firstName.includes(value)) || (data1.lastName.includes(value)) : null)
    return item;
  }
  return (
    <div>
      <User type={data1.length} admin={admin} />
      <div
        className="img3"
      >
        {(data1.length <= 6) ?
          <>
            {data1.map(post => (
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
            {data1.map((post, index) => {
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
            <div className="number iconStyle">+{data1.length - 5}</div>
          </>
        }
      </div>
    </div>
  )
}
