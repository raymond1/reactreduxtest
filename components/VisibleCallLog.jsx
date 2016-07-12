import React from 'react'
import {addNewCallTime} from '../actions'
//
//      <label }>Enter a call time and press enter to log a call</label> &nbsp;&nbsp;<input type='text' key={`logCallForm{$props.index}`} />
const VisibleCallLog = (props) =>
(
  <div>
      <label htmlFor={`logCallForm{$props.index}`}>Enter a call time and press enter to log a call</label><input type='text' onKeyDown={e => {if (e.keyCode==13){dispatch(addNewCallTime(index,time))}}} key={`logCallForm{$props.index}`}/>
  </div>
)

export default VisibleCallLog
