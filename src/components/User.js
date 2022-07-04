import React from 'react'

const User = ({users}) => {

    

  return (

    <table className="table">
    <thead>
        <tr>
            <th>Names</th>
            <th className="hide-sm">Email</th>
            <th className="hide-sm">Age</th>
            <th />
        </tr>
    </thead>
    <tbody>{users}</tbody>
</table>
  )
}

export default User

