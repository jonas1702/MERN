import React from "react";
import '../style.css'

const DeleteCard = (props) => {

  return (
    <div className="delete-card">
      <h2 className="delete-card-heading">Delte this book?</h2>
      <p className="delete-card-text">Warning! if you delete this book it can not be restored and will be gone forever!</p>
      <div className="delete-card-button-container">
        <button className="delete-button" onClick={props.onDelete}>Delete</button>
        <button className="cancel-button" onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteCard