import React from 'react'
import User from './User'

const Users = ({users}) => {
    const userData = users.map(user => (
        <tr key={user.id}>
            <td>{`${user.firstname} ${user.lastname}`}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
        </tr>
    ))
  return (
    <div>
        <h3>ADMIN ONLY</h3>
        <User users={userData}/>
    </div>
  )
}

export default Users