var leaveMessage = {
    name: 'leaveMessageIntent',
    utterances: [
        'Leave a message',
        'Leave message'
    ]
}

var speechModel = {
    intents: [
        leaveMessage
    ],
}

module.exports = speechModel;