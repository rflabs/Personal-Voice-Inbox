
var localDataStore = require('../localDataStore')

var Welcome = function(Context){
    let user = Context.deviceProfile.id
    if (localDataStore.hasAdmin() === false) {
        Context.assistant.say("Welcome to Kevin Lee's voice inbox. Would you like to register as the admin?").finish()
    } 
    else if (localDataStore.isAdmin(Context.deviceProfile)) {
        Context.assistant.say("Welcome to your inbox. Would you like to me to read you your messages?").finish()
    }
    else {
        Context.assistant.say("Welcome to Kevin Lee's voice inbox. Please tell me the message you'd like to relay to Kevin.").finish()
    }
    
}

module.exports = Welcome;