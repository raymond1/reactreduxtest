import React from 'react'
import {connect} from 'react-redux'
import {logCall} from '../actions'
import VisibleCallLog from './VisibleCallLog'

const CallLog = (props)=>(
  <div>
    {
      (props.visible)?<VisibleCallLog/>:null
    }
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

function mapStateToProps(state, props){
  var stateJS = state.toJS()
  var callTimes = stateJS[props.index].callTimes
  return {
    callTimes,
    visible: stateJS[props.index].callLogVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallLog)
