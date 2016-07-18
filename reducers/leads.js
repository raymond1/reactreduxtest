import Immutable from 'immutable'
var moment = require('moment')

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

var defaultDate = moment()

defaultDate.year(1982) 
defaultDate.month(3) 
defaultDate.date(31) 

export default (state = Immutable.List([{name: 'Person1', phoneNumber: '9011.12312', callLogVisible: false, callTimes: ['Saturday at 1:00pm'], appointmentMakerVisible: false, appointment:{set:false, date: defaultDate, time: '12'} }]), action) => {
  switch(action.type) {
    case 'addLead':
      var newState = state.unshift({name: action.lead.name, phoneNumber: action.lead.phoneNumber, callLogVisible: false, callTimes: [], appointmentMakerVisible: false, appointment:{set: false, date: moment(), time: '3'}})
      return newState 
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    case 'editPhoneNumber':
      var cloneState = state.toJS()
      cloneState[action.index].phoneNumber = action.phoneNumber + ''
      var newState = Immutable.List(cloneState)
      return newState
    case 'makeCallLogVisible':
      var stateArray = state.toJS()
      stateArray[action.index].callLogVisible = true
      var newState = Immutable.List(stateArray)
      return newState
    case 'makeCallLogInvisible':
      var stateArray = state.toJS()
      stateArray[action.index].callLogVisible = false
      var newState = Immutable.List(stateArray)
      return newState
    case 'toggleCallLogVisibility':
      var stateArray = state.toJS()
      stateArray[action.index].callLogVisible = !stateArray[action.index].callLogVisible
      return Immutable.List(stateArray)
    case 'logCall':
      //var stateArray = deepCloneState(state)
      var cloneState = state.toJS()
      stateArray[action.index].callTimes.append({dateTime: '' + action.dateTime}) 
      var newState = Immutable.List(stateArray)
      return newState
    case 'addNewCallTime':
      var cloneState = state.toJS()
      cloneState[action.index].callTimes.push(action.time)
      return Immutable.List(cloneState)
    case 'toggleAppointmentPicker':
      var cloneState = state.toJS()
      cloneState[action.index].appointmentPickerVisible = !cloneState[action.index].appointmentPickerVisible
      return Immutable.List(cloneState)
    case 'setAppointment':
      var cloneState = state.toJS()
      cloneState[action.index].appointment.date = action.date
      cloneState[action.index].appointment.time = action.time
      cloneState[action.index].appointment.set = true
      return Immutable.List(cloneState)
    case 'clearAppointment':
      var cloneState = state.toJS()
      cloneState[action.index].appointment.set = false
      return Immutable.List(cloneState)
    default:
      return state
  }
}
