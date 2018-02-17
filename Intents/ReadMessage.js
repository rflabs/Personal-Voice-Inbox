// Data stores for state, app, and user data
var StateDataStore = require('../DataStores/StateDataStore')
var MessageDataStore = require('../DataStores/MessageDataStore')

// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var ReadMessage = function(Context){
    StateManager.setState('message', Context)
    MessageDataStore.getNewMessage().then(function(message) {
        if (!message) {
            StateManager.setState('welcome', Context)
            Context.assistant.say("No new messages. Please say 'repeat message' or 'exit' to leave.").finish({exit:true})
        } else {
            Context.assistant.say(message + ". Please say 'repeat' to hear the message again or 'next message' to continue.").finish()
        }
    })
}

module.exports = ReadMessage;