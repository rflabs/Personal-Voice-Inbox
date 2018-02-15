var States = {
    
    'welcome': {
        activeIntents: ['input.welcome', 'noAdminWelcome', 'adminWelcome', 'userWelcome'],
        middleware: ['logInput']
    },

    'noAdminWelcome': {
        activeIntents: ['input.welcome', 'addAdmin', 'exit'],
        middleware: ['logInput']
    },

    'adminWelcome': {
        activeIntents: ['input.welcome', 'readMessage', 'exit'],
        middleware: ['logInput']
    }

}

module.exports = States
