var AdminDataStore = require('../DataStores/AdminDataStore')

var isAdmin = function(Context) {
    if (AdminDataStore.getAdmins(Context.deviceProfile.platform).includes(Context.deviceProfile.id)) {
        Context.isAdmin = true
    }
}