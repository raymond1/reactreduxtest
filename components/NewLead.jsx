import React from 'react'
import { connect } from 'react-redux'

const NewLead = ({onChange}) => 
(
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
)

export default NewLead
