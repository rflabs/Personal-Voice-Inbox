
var localDataStore = require('../localDataStore')

var AddAdmin = function(Context){
    localDataStore.saveAdmin(Context.deviceProfile)
    Context.assistant.say("Device registerd as an admin. Would you like me to read you your messages?").finish()
}

module.exports = AddAdmin;