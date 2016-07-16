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

function mapStateToProps(state) {
  var tempState = state.toArray()
  return {
    leads: tempState
  }
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
            <div key={`lead${index}`}>
              <p>
                {lead.name}

                <PhoneNumber index={index} phoneNumber={lead.phoneNumber} />
                <OpenCallLog index={index}/>
                <ScheduleAppointment index={index} store={props.store}/>
                <button onClick=
                  {
                    e => 
                    {
                      props.store.dispatch(deleteLead(index))
                    }
                  }
                >
                X
                </button>
              </p>
              <AppointmentPicker index={index} visible={lead.appointmentPickerVisible}/>
              <CallLog index={index}/>
            </div>
          )
      )
    }
  </div>
)


export default connect(mapStateToProps)(Leads)
