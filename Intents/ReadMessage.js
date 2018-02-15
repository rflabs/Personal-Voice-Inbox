// Data stores for state, app, and user data
var AdminDataStore = require('../DataStores/AdminDataStore')
var StateDataStore = require('../DataStores/StateDataStore')

// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var ReadMessage = function(Context){
    AdminDataStore.saveAdmin(Context.deviceProfile)
    StateManager.setState('adminWelcome', Context)
    Context.assistant.say("You are registered as an admin. Would you like to hear your messages?").finish()
}

module.exports = ReadMessage;