import React from 'react'
import {addNewCallTime} from '../actions'
import {connect} from 'react-redux'
import CallTime from './CallTime'

const VisibleCallLog = React.createClass({
  getInitialState: function(){
    return {
      callTimes: this.context.store.getState().toArray()[this.props.index].callTimes
    }
  },
  handleSubmit: function(e){
    var store = this.context.store
    e.preventDefault()
    store.dispatch(addNewCallTime(this.props.index, this._input.value))
    var callTimes = store.getState().toArray()[this.props.index].callTimes
    this.setState({callTimes: callTimes})
  },
  render:function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={`logCallForm${this.props.index}`}>Enter a call time and press enter to log a call</label><input ref={(input)=> {this._input= input}} type='text' key={`logCallForm${this.props.index}`}/>
        </form>
        {
          this.state.callTimes.map(
            (callTime, index, callTimesArray) =>
              (
                <CallTime key={`callTime${index}`}>
                  {callTime}
                </CallTime>
              )
            )
        }
      </div>
    )
  }
})

VisibleCallLog.contextTypes={
  store: React.PropTypes.object
}

function mapStateToProps(state,props){
  var stateJS = state.toJS()
  
  return {
    callTimes: stateJS[props.index].callTimes
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCallLog)
