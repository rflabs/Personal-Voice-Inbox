var Intents = {}

Intents['input.welcome'] = require('./Welcome');
Intents.addAdmin = require('./AddAdmin')
Intents.readMessage = require('./ReadMessage')

module.exports = Intents;