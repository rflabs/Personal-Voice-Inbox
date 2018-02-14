
var LocalDataStore = function(){
    var Data = {
        Admins: {
            "google": [],
            "alexa": []
        }
    }
    return {
        saveAdmin: function(deviceProfile) {
            Data.Admins[deviceProfile.platform].push(deviceProfile.id)
            console.log(Data)
        },
        getAdmins: function(platform) {
            return Data.Admins[platform]
        },
        hasAdmin: function() {
            console.log(Data)
            for (platform in Data.Admins) {
                if(Data.Admins[platform].length != 0) {
                    return true
                }
            }
            return false
        },
        isAdmin: function(deviceProfile) {
           return Data.Admins[deviceProfile.platform].includes(deviceProfile.id)
        }
    }
}()

module.exports = LocalDataStore