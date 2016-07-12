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

export function openCallLog(index){
  return {
    type: 'openCallLog',
    index: index
  }
}

export function logCall(index, dateTime){
  return {
    type: 'logCall',
    index,
    dateTime
  }
}
