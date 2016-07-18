import React from 'react'

const AppointmentIndicator = (props, context) =>
(
  <span>
  {
    context.store.getState().toArray()[props.index].appointment.set?<span>Appointment set</span>:<span>No appointment set</span>
  }
  </span>
)

AppointmentIndicator.contextTypes = {
  store: React.PropTypes.object
}
export default AppointmentIndicator
