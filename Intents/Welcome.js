// Data stores for state, app, and user data
var AdminDataStore = require('../DataStores/AdminDataStore')
var StateDataStore = require('../DataStores/StateDataStore')

// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var Welcome = function(Context){
    if (AdminDataStore.hasAdmin() === false) {
        StateManager.setState('noAdminWelcome', Context)
        Context.assistant
            .say("Kevin Lee's voice inbox. No admin found. Please say 'register as admin' to hear messages in this inbox.")
            .reprompt.say("Please say 'register as admin' to continue, or say 'exit' to leave.")
            .finish()
    } 
    else if (AdminDataStore.isAdmin(Context.deviceProfile)) {
        StateManager.setState('adminWelcome', Context)
        Context.assistant
            .say("Your voice inbox. Please say 'read message' to hear your messages.")
            .reprompt.say("Please say 'read message' to hear your messages, or say 'exit' to leave.")
            .finish()
    }
    else {
        StateManager.setState('userWelcome', Context)
        Context.assistant.say("Kevin Lee's voice inbox. Please tell me the message you'd like to relay to Kevin.").finish()
    }
    
}

module.exports = Welcome;