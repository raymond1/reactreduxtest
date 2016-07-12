import React from 'react'
import {connect} from 'react-redux'
import {openCallLog, toggleCallLogVisibility} from '../actions'

const OpenCallLog = (props) => (
  <button onClick={props.onClick}>Call log</button>
)

function mapDispatchToProps(dispatch, ownProps){
  return {
    onClick: function(e){
      dispatch(toggleCallLogVisibility(ownProps.index))
    }
  }
}

function mapStateToProps(state){
  return{
  }
}

export default connect(null, mapDispatchToProps)(OpenCallLog)
