
// Nexmo Payload
/*
    Method: GET
    {
        "msisdn": "###########",    // From Number
        "to": "###########",        // To Number
        "messageId": "17000002577714C9",
        "text": "Text body",        // Message Body
        "type": "text",
        "keyword": "TEXT",
        "message-timestamp": "2019-10-23 18:50:23"
    }
 */

const fetchNexmoPayload = (request) => {
    // Nexmo payloads come via GET request with data in query
    if (request.method != 'GET') {
        return null;
    }

    return {
        fromPhone: parseInt(request.query.msisdn),
        toPhone: parseInt(request.query.to),
        messageBody: request.query.text
    };
};

module.exports = fetchNexmoPayload;