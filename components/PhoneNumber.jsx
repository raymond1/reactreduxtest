import React from 'react'
import {connect} from 'react-redux'
import {editPhoneNumber} from '../actions'


const PhoneNumber = React.createClass({
  render: function(){
    return (<div><label htmlFor={`phoneNumber${this.props.index}`} >Phone Number:</label><input id={`phoneNumber${this.props.index}`}type='text' value={this.props.phoneNumber} onChange={this.props.onChange} /></div>);
  }
})

function mapStateToProps(state, props){
  var stateArray = state.toArray()
  return {phoneNumber: stateArray[props.index].phoneNumber, index: props.index}
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onChange: function(event){
      dispatch(editPhoneNumber(event.target.value, ownProps.index))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneNumber)
