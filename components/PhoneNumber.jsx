import React from 'react'
import {connect} from 'react-redux'
import {editPhoneNumber} from '../actions'


const PhoneNumber = 
({phoneNumber, index, dispatch}) => (
<input type='text'
  onChange={
    e => {
      dispatch(editPhoneNumber('905.527.2251', index))
    }
  }
/>
)

function mapStateToProps(phoneNumber, index){
  return {phoneNumber: phoneNumber, index: index}
}

export default connect(mapStateToProps)(PhoneNumber)
