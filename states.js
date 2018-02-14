var States = {
    
    'welcome': {
        activeIntents: ['input.welcome','addAdmin', 'noAdmin','readMessage','sendMessage'],
        middleware: ['logInput']
    },

    'registerAdmin': {
        activeIntents: ['input.welcome'],
        middleware: ['logInput']
    },

}

module.exports = States
