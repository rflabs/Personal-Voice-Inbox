var localDataStore = require('../localDataStore')

var isAdmin = function(Context) {
    if (localDataStore.getAdmins(Context.deviceProfile.platform).includes(Context.deviceProfile.id)) {
        Context.isAdmin = true
    }
}