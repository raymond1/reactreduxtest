import Immutable from 'immutable'

export default (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift(action.lead)
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    case 'editPhoneNumber':
      return state.unshift(action.lead)
    default:
      return state
  }
}
