import React from 'react'
import {connect} from 'react-redux'
import {logCall} from '../actions'

const CallLog = (index)=>(
  <div>
    <label htmlFor={`logCallForm{$index}`}>Enter a call time and press enter to log a call</label>
    &nbsp;&nbsp;<input type='text' key={`logCallForm{$index}`} />
                <button>Delete</button>
  </div>
)

function mapDispatchToProps(dispatch, ownProps){
  return {
    onKeyDown: function(e){
      if (e.keyCode ==13)
      {
        dispatch(logCall(ownProps.index, e.target.value))
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(CallLog)
