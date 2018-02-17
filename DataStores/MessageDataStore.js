
var MessageDataStore = function(){
    var Data = {
        Messages: []
    }
    return {
        createMessage: function(message) {
            Messages.push({
                message:message,
                status:'unread'
            })
            console.log(Messages)
            return('message saved')
        },
        getNewMessage: function() {
            return new Promise(function(resolve, reject) {
                for (let i = 0; i < Data.Messages.length; i++) {
                    if (Data.Messages[i].status === 'unread') {
                        Data.Messages[i].status = 'read'
                        resolve(Data.Messages[i].message) 
                    }
                }
                resolve()
            })
        }
    }
}()

module.exports = MessageDataStore