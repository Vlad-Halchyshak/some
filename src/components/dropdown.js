import React from 'react'


export const Dropdown = () => {
  const [role, setRole] = React.useState([
    
    { id: 1, name: 'User'},
    { id: 2, name : 'Member'},
    { id: 3, name: 'Admin'},
    { id: 4, name: 'Custom'},
    
  ])

  const handleChange =  (e) => {
    console.log('ey')
  }
  return (
    <div className="dropdown_menu">
      <p>User Role</p>
      <select onChange = {  handleChange}>
        {
          role.map((i) => (
          <option>{i.name} </option>
          ))
        }
      </select>
    </div>
  )
}