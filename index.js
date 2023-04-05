import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);
const myNumber = process.env.MY_NUMBER
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

//Send a text
// client.messages
//     .create({ body: 'This is a text message!', from: twilioNumber, to: myNumber })
//     .then(message => console.log(message.sid));

//Make a phone number
// client.calls
//     .create({
//         twiml: `
//         <Response>
//         <Say>Hello! I have been meaning to call you about your cars extended warrenty</Say>
//         </Response>
//         `,
//         to: myNumber,
//         from: twilioNumber
//     })
//     .then(call => console.log(call.sid));