import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);
const sherif = process.env.SHERIF
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

const phoneBook = [
    {
        name: "Sherif",
        number: sherif
    },
    {
        name: "Will",
        number: process.env.WILL
    },
    {
        name: "Abi",
        number: process.env.ABI
    }

]

const randomNumber = phoneBook[Math.floor(Math.random() * phoneBook.length)]

//Send a text
// client.messages
//     .create({ body: 'This is a text message!', from: twilioNumber, to: sherif })
//     .then(message => console.log(message.sid));


//Send many texts
// phoneBook.forEach((person) => {
//     const { name, number } = person
//     client.messages.create({ body: `Hello ${name}! You have been added to my spam campaign. A thousand messages will be sent to you every day. None of them will be funny.`, from: twilioNumber, to: number })
//         .then(call => console.log(call.sid));

// })

//Make a phone call
// client.calls
//     .create({
//         twiml: `
//         <Response>
//             <Say>Hello! I have been meaning to call you about your cars extended warrenty</Say>
//         </Response>
//         `,
//         to: sherif,
//         from: twilioNumber
//     })
//     .then(call => console.log(call.sid));



// Make many phone calls
// phoneBook.forEach((person) => {
//     const { name, number } = person
//     client.calls
//         .create({
//             twiml: `
//         <Response>
//         <Say>Hello ${name}! I have been meaning to call you about your cars extended warrenty</Say>
//         </Response>
//         `,
//             to: number,
//             from: twilioNumber
//         })
//         .then(call => console.log(call.sid));

// })




//Winner
// client.calls
//     .create({
//         twiml: `
//         <Response>
//         <Say>You have won our competition! Well done your prize is a firm handshake</Say>
//         </Response>
//         `,
//         to: randomNumber.number,
//         from: twilioNumber
//     })
//     .then(call => console.log(call.sid));