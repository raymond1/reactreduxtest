import React from 'react'
import {connect} from 'react-redux'
import {logCall} from '../actions'
import VisibleCallLog from './VisibleCallLog'

const CallLog = (props)=>
(
  <div>
    {
      (props.visible)?<VisibleCallLog index={props.index} callTimes={props.callTimes}/>:null
    }
  </div>
)

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

function mapStateToProps(state, props){
  var stateJS = state.toJS()
  return {
    visible: stateJS[props.index].callLogVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallLog)
