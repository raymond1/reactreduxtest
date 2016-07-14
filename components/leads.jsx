import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import PhoneNumber from './PhoneNumber'
import OpenCallLog from './OpenCallLog'
import Immutable from 'immutable'
import CallLog from './CallLog'
import store from '../store'


function mapStateToProps(state) {
  var tempState = state.toArray()
  return {
    leads: tempState
  }
}

const Leads = ({leads}) => (
  <div>
    <h1>Leads</h1>
    <NewLead onChange={
      e => {
        if(e.keyCode == 13){
          store.dispatch(addLead({name: e.target.value, phoneNumber: ''}))
          e.target.value = ''
        }
      }
    }/>
    {
      leads.map
      (
        (lead, index, arrayPassedIn) => 
          (
            <div key={`lead${index}`}>
              <p>
                {lead.name}

                <PhoneNumber index={index} phoneNumber={lead.phoneNumber} />
                <OpenCallLog index={index}/>
                <button onClick=
                  {
                    e => 
                    {
                      store.dispatch(deleteLead(index))
                    }
                  }
                >
                X
                </button>
              </p>
              <CallLog index={index}/>
            </div>
          )
      )
    }
  </div>
)


export default connect(mapStateToProps)(Leads)
