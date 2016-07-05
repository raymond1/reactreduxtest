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

export function editPhoneNumber(phoneNumber){
  return {
    type: 'editPhoneNumber',
    phoneNumber
  }
}
