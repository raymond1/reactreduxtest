import Immutable from 'immutable'

//returns a deep clone of the current state. The new returned state object is a different object from the one passed in
function deepCloneState(state){
  var stateArray = state.toArray()
  var newState = []
  
  for (var i = 0; i < stateArray.length; i++){
    newState[i] = {}
    newState[i].name = '' + stateArray[i].name
    newState[i].phoneNumber = '' + stateArray[i].phoneNumber
    newState[i].callTimes = []
    for (var j = 0; j < stateArray[i].callTimes.length; j++){
      newState[i].callTimes[j] = '' + stateArray[i].callTimes[j]
    }
    newState[i].callLogVisible = stateArray[i].callLogVisible
  }
  return Immutable.List(newState)
}

export default (state = Immutable.List([{name: 'Person1', phoneNumber: '9011.12312', callLogVisible: false, callTimes: ['Saturday at 1:00pm']}]), action) => {
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
    case 'makeCallLogVisible':
      var stateArray = deepCloneState(state).toArray()
      var index = action.index
      stateArray[i].callLogVisible = true
      var newState = Immutable.List(stateArray)
      return newState
    case 'makeCallLogInvisible':
      var stateArray = deepCloneState(state).toArray()
      var index = action.index
      stateArray[i].callLogVisible = false
      var newState = Immutable.List(stateArray)
      return newState
    case 'toggleCallLogVisibility':
      var stateArray = deepCloneState(state).toArray()
      var index = action.index
      stateArray[index].callLogVisible = !stateArray[index].callLogVisible
      var newState = Immutable.List(stateArray)
      return newState
    case 'logCall':
      var stateArray = deepCloneState(state)
      stateArray[action.index].callTimes.append({dateTime: '' + action.dateTime}) 
      var newState = Immutable.List(stateArray)
      return newState
    case 'addNewCallTime':
      var cloneState = state.toJS()
      cloneState[action.index].callTimes.push(action.time)
      return Immutable.List(cloneState)
    default:
      return state
  }
}
