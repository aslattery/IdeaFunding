
// Twilio Payload
/*
    Method: POST
    {
        ToCountry: ‘US’,
        ToState: ‘IL’,
        SmsMessageSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        NumMedia: ‘0’,
        ToCity: ‘SIDELL’,
        FromZip: ‘85004’,
        SmsSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        FromState: ‘AZ’,
        SmsStatus: ‘received’,
        FromCity: ‘PHOENIX’,
        Body: ‘Test Two’,
        FromCountry: ‘US’,
        To: ‘+##########’,
        MessagingServiceSid: ‘MG2ca64febf3dc8f8eb0fd10d7aa45663b’,
        ToZip: ‘61810’,
        NumSegments: ‘1’,
        MessageSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        AccountSid: ‘*******************************’,
        From: ‘+##########’,
        ApiVersion: ‘2010-04-01’
    }
*/

const fetchTwilioPayload = (request) => {
    // Twilio payloads come via POST request with data in body
    if (request.method != 'POST') {
        return null;
    }

    messageBody = request.body.Body;
    toPhone = request.body.To.match(/[0-9]+/);
    fromPhone = request.body.From.match(/[0-9]+/);

    if (toPhone == null || fromPhone == null) {
        return null;
    } else {
        toPhone = parseInt(toPhone[0]);
        fromPhone = parseInt(fromPhone[0]);
    }
    return {
        messageBody,
        toPhone,
        fromPhone
    };
};

module.exports = fetchTwilioPayload;