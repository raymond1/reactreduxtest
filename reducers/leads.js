import Immutable from 'immutable'
export default (state = Immutable.List([{name: 'Person1', phoneNumber: '9011.12312'}]), action) => {
  switch(action.type) {
    case 'addLead':
      var newState = state.unshift({name: action.lead.name, phoneNumber: action.lead.phoneNumber})
      return newState 
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    case 'editPhoneNumber':
      var stateArray = state.toArray()
      var tempState = []
      for (var i = 0; i < stateArray.length; i++){
        if (action.index == i){
          tempState[i] = {name: '' + stateArray[i].name, phoneNumber: '' + action.phoneNumber}
        }
        else{
          tempState[i] = {name: '' + stateArray[i].name, phoneNumber: '' + stateArray[i].phoneNumber}
        }
      }
      var newState = Immutable.List(tempState)
      return newState 
    default:
      return state
  }
}
