import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import PhoneNumber from './PhoneNumber'
import Immutable from 'immutable'

function mapStateToProps(state) {
  var tempState = state.toArray()
  return {
    leads: tempState
  }
}

const Leads = ({leads, dispatch}) => (
  <div>
    <h1>Leads</h1>
    <NewLead onChange={
      e => {
        if(e.keyCode == 13){
          dispatch(addLead({name: e.target.value, phoneNumber: ''}))
          e.target.value = ''
        }
      }
    }/>
    {
      leads.map
      (
        (lead, index, arrayPassedIn) => 
          <p key={index}>
            {lead.name}
            <PhoneNumber index={index} phoneNumber={lead.phoneNumber} />
            <button onClick=
              {
                e => 
                {
                  dispatch(deleteLead(index))
                }
              }
            >
            X
            </button>
          </p>
      )
    }
  </div>
)


export default connect(mapStateToProps)(Leads)
