import Immutable from 'immutable'

export default (state = Immutable.List([{name: 'Q'}, {name: 'R'}]), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift({name: action.lead.name})
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    case 'editPhoneNumber':
      var newState = [{name:'pigs'},{name: 'can' + action.index}, {name: 'fly' + state.length}];
/*
      for (var i = 0; i < state.length; i++){
        if (action.index == i){
          newState[i] = {name: '' + state[i].name, phoneNumber: action.phoneNumber}
        }
        else{
         newState[i] = {name: '' + state[i].name, phoneNumber: '' + state[i].phoneNumber}
        }
      }
*/
      return newState
    default:
      return state
  }
}
