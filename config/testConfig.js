module.exports = exports =
   {
     sendgrid_key: process.env.sendgrid_key || `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`,
     twilio_test_sid: process.env.twilio_test_sid || `ACa121f947ddf02366cfe8d9253d790879`,
     twilio_test_token: process.env.twilio_test_token || `02bae6fb0a93094a1c278f06d5a2e76c`,
     twilio_secret: process.env.twilio_secret || `gwfguoEvD5Sd1NwEDakIFMepYXQEkN03`,
     mlabs_name: process.env.mlabs_name || `patrick`,
     mlabs_pass: process.env.mlabs_pass || `portstuff1`,
     mongoport: process.env.mongoport || `55555`,
     test_mongo: process.env.test_mongo || `mongodb://patrick:portstuff1@ds049925.mongolab.com:49925/ackportfolio_test`
   }
