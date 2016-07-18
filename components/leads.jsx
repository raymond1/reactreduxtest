import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead, markLeadAsAccount } from '../actions'
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

var isLead = function(lead){
  return !lead.isAccount
}

var isAccount = function(lead){
  return lead.isAccount
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
    <h2>Leads</h2>
    {
      props.leads.map
      (
        (lead, index, arrayPassedIn) => 
          (
            isLead(lead)?
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
                    <button onClick=
                      {
                        e=>
                        {
                          props.store.dispatch(markLeadAsAccount(index))
                        }
                      }
                    >
                    Convert lead into account
                    </button>
                  </div>
                  <AppointmentPicker index={index} visible={lead.appointmentPickerVisible} appointment={lead.appointment}/>
                  <CallLog index={index}/>
                </div>
              ):null
          )
      )
    }
    <h2>Accounts</h2>
    {
      props.leads.map(
        (lead, index, arrayPassedIn) =>
          isAccount(lead)?
            ( 
              <div key={`account${index}`}>
                {lead.name}
              </div>
            ):
            null
      )
    }
  </div>
)


export default connect(mapStateToProps)(Leads)
