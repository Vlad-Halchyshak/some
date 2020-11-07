import React from 'react'



export const FoldersBlock = () => {
  const [checked, setChecked] = React.useState(true)
  const [disabled, setDisabled] = React.useState(true)
  return (
    <div className="Folders_block">
      <p>Folders</p>

      <input type="checkbox" checked={!checked} disabled={true} />
      <label>Create</label>

      <input type="checkbox" checked={!checked} disabled="true" />
      <label>Update</label>

      <input type="checkbox" checked={checked} disabled={true} />
      <label>Move</label>

      <input type="checkbox" checked={checked} disabled={true} />
      <label>Delete</label>

      <input type="checkbox" checked={!checked} disabled="true" />
      <label>View</label>

      <input type="checkbox" checked={!checked} disabled="true" />
      <label>Share</label>
    </div>
  )
}

