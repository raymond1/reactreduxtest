import React from 'react'
import {connect} from 'react-redux'
import {editPhoneNumber} from '../actions'


const PhoneNumber = 
({phoneNumber, dispatch}) => (
<input type='text'
  onChange={
    e =>
    (
      dispatch(editPhoneNumber(e.target.value, e.target))
    )
  }
/>
)

function mapStateToProps(phoneNumber){
  return {phoneNumber}
}

export default connect(mapStateToProps)(PhoneNumber)
