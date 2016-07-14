import React from 'react'
import {connect} from 'react-redux'

const CallTime = (props)=>
(
  <div>{`${props.children.toString()}`}</div>
)

export default connect()(CallTime)
