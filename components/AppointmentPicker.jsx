import React from 'react'
import DatePicker from 'react-datepicker'
import Datetime from 'react-datetime'
//require('../react-datetime.css') 
import TimePicker from './TimePicker'
var moment = require('moment')
require('../react-datepicker.css');
import {setAppointment, clearAppointment} from '../actions'

const AppointmentPicker = React.createClass({
  getInitialState: function(){
    if (this.props.appointment.set){
      return {
        time: this.props.appointment.time,
        date: this.props.appointment.date,
        set: true
      }
    }else{
      //no appointment scheduled
      return {
        date: moment(),
        time: '3',
        set: false
      }
    }
  },
  handleDateChange: function(date){
    this.setState({
      date: date
    })
  },
  handleSubmit: function(e){
    e.preventDefault()
    this.context.store.dispatch(setAppointment(this.props.index, this.state.date, this.state.time))
    this.setState({date: this.state.date, time: this.state.time, set: true})
  },
  handleTimeChange: function(e){
    this.setState(
      {
        time: e.target.value
      }
    )
  },
  handleClearAppointment: function(e){
    this.context.store.dispatch(clearAppointment(this.props.index))
    this.setState(
      {
        set: false
      }
    )
  },
  render: function(){
    return (
      <div>
        {
          this.props.visible?
            (
              <form onSubmit={this.handleSubmit}>
                <DatePicker selected={this.state.date} onChange={this.handleDateChange}/><TimePicker time={this.state.time} onChange={this.handleTimeChange}/><input type="submit" value="Set appointment"/><input type="button" value="Clear appointment" onClick={this.handleClearAppointment}/>
              </form>
            )
            :
            null
        }
      </div>
    )
  }
})

AppointmentPicker.contextTypes = {
  store: React.PropTypes.object
}

export default AppointmentPicker
