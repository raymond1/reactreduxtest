import React from 'react'
import { connect } from 'react-redux'

const NewTodo = ({onChange}) => 
(
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
    <input type="text" />
  </div>
)

export default NewTodo
