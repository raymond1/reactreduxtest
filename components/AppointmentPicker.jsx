import React from 'react'
import DatePicker from 'react-datepicker'
import Datetime from 'react-datetime'
//require('../react-datetime.css') 
import TimePicker from './TimePicker'
var moment = require('moment')
require('../react-datepicker.css');
import {setAppointment} from '../actions'


const AppointmentPicker = React.createClass({
  getInitialState: function(){
    //if no appointment scheduled
    return {
      date: moment()
    }
  },
  handleDateChange: function(date){
    this.setState({
      date: date
    });
  },
  handleSubmit: function(e){
    e.preventDefault()
    this.context.store.dispatch(setAppointment(this.props.index, this.state.selected, this.state.time))
  },
  render: function(){
    return (
      <div>
        {
          this.props.visible?
            (
              <form onSubmit={this.handleSubmit}>
                <DatePicker selected={this.state.date} onChange={this.handleDateChange}/><TimePicker/><input type="submit" value="Set appointment"/>
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
