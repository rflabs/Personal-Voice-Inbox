var Intents = {}

Intents['input.welcome'] = require('./Welcome');
Intents.addAdmin = require('./AddAdmin')

module.exports = Intents;