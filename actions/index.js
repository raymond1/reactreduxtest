export function addLead(lead){
  return {
    type: 'addLead',
    lead
  }
}

export function deleteLead(index){
  return {
    type: 'deleteLead',
    index
  }
}

export function editPhoneNumber(phoneNumber, index){
  return {
    type: 'editPhoneNumber',
    phoneNumber: phoneNumber,
    index: index
  }
}

export function makeCallLogVisible(index){
  return {
    type: 'makeCallLogVisible',
    index: index
  }
}

export function makeCallLogInvisible(index){
  return {
    type: 'makeCallLogInvisible',
    index: index
  }
}

export function toggleCallLogVisibility(index){
  return {
    type: 'toggleCallLogVisibility',
    index
  }
}

export function logCall(index, dateTime){
  return {
    type: 'logCall',
    index,
    dateTime
  }
}

export function addNewCallTime(index,time){
  return {
    type: 'addNewCallTime',
    index,
    time
  }
}

export function toggleAppointmentPicker(index){
  return {
    type:'toggleAppointmentPicker',
    index
  }
}

export function setAppointmentDate(index, date){
  return {
    type: 'setAppointmentDate',
    date
  }
}

export function setAppointmentTime(index, time){
  return {
    type: 'setAppointmentTime',
    time
  }
}

export function setAppointment(index,date,time){
  return{
    type: 'setAppointment',
    index,
    date,
    time
  }
}

export function clearAppointment(index){
  return {
    type: 'clearAppointment',
    index
  }
}

export function markLeadAsAccount(index){
  return{
    type: 'markLeadAsAccount',
    index
  }
}
