import React from 'react'
import {connect} from 'react-redux'
import openCallLog from '../actions'

const OpenCallLog = () => (
  <button>Call log</button>
)

function mapDispatchToProps(dispatch, ownProps){
  return {
    onClick: function(e){
      dispatch(openCallLog(this.props.index))
    }
  }
}

function mapStateToProps(state){
  return{
  }
}

export default connect(null, mapDispatchToProps)(OpenCallLog)
