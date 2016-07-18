import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import PhoneNumber from './PhoneNumber'
import OpenCallLog from './OpenCallLog'
import Immutable from 'immutable'
import CallLog from './CallLog'
//import store from '../store'
import ScheduleAppointment from './ScheduleAppointment'
import AppointmentPicker from './AppointmentPicker'
import AppointmentIndicator from './AppointmentIndicator'

function mapStateToProps(state) {
  var tempState = state.toArray()
  return {
    leads: tempState
  }
}

var style = {
  border: '2px #ff00ff solid'
}
const Leads = (props) => (
  <div>
    <h1>Leads</h1>
    <NewLead store={props.store} onChange={
      e => {
        if(e.keyCode == 13){
          props.store.dispatch(addLead({name: e.target.value, phoneNumber: ''}))
          e.target.value = ''
        }
      }
    }/>
    {
      props.leads.map
      (
        (lead, index, arrayPassedIn) => 
          (
            <div key={`lead${index}`} style={style}>
              <div>
                {lead.name}

                <PhoneNumber index={index} phoneNumber={lead.phoneNumber} />
                <OpenCallLog index={index}/>
                <ScheduleAppointment index={index} store={props.store}/>
                <AppointmentIndicator index={index}/>
                <button onClick=
                  {
                    e => 
                    {
                      props.store.dispatch(deleteLead(index))
                    }
                  }
                >
                Delete Lead
                </button>
              </div>
              <AppointmentPicker index={index} visible={lead.appointmentPickerVisible} appointment={lead.appointment}/>
              <CallLog index={index}/>
            </div>
          )
      )
    }
  </div>
)


export default connect(mapStateToProps)(Leads)
