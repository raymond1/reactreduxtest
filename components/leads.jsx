import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import PhoneNumber from './PhoneNumber'

function mapStateToProps(leads) {
  return {
    leads
  }
}

const Leads = ({leads, dispatch}) => (
  <div>
    <h1>Leads</h1>
    <NewLead onChange={
      e => {
        if(e.keyCode == 13){
          dispatch(addLead(e.target.value, ''))
          e.target.value = ''
        }
      }
    }/>
    {
      leads.map
      (
        (lead, index, arrayPassedIn) => 
          <p key={index}>
            {lead}
            <PhoneNumber />
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
