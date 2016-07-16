import React from 'react'
import {connect} from 'react-redux'
import {toggleAppointmentPicker} from '../actions'

class ScheduleAppointment extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <button onClick={
      function(){
        this.context.store.dispatch(toggleAppointmentPicker(this.props.index))
      }.bind(this)
    } ><span className="glyphicon glyphicon-calendar"></span></button>
  }
}


ScheduleAppointment.contextTypes = {
  store: React.PropTypes.object
}

export default ScheduleAppointment
