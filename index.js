"use strict"

const { Client } = require("whatsapp-web.js")
const QRCode = require("qrcode")




// Instance of whats client
const client = new Client()

client.on('qr', (qr) => {

    QRCode.toString(qr, { type: "terminal" }, function(err, url){
        // Scan this QR code in your phone
        console.log(url);
    })

})

client.on("ready", async () => {
    console.log(`Client ready`);


    // try {
    //     let userContacts = await client.getContacts()
    //     let userDestiny = userContacts.filter(contact => contact.id.user == "")



    //     client.sendMessage(userDestiny[0].id._serialized, "Hey!, I am BONI.\nA bot created by Marcos Bonifasi.\nIn a moment he will talk to you :)").then(result => {
    //         console.log(result);
    //     }).catch(error => {
    //         console.log(`Error ${error}`);
    //     })

    // } catch (error) {
    //     console.log(`Error ${error}`);
    // }


})

client.on("message", (msg) => {
    

    const chatID = msg.id.remote 

    if(msg.body.toLowerCase() == "hello"){
        client.sendMessage(chatID, "Hey!, I am BONI.\nA bot created by Marcos Bonifasi.\nIn a moment he will talk to you :)")
                .then(result => {
                    console.log(result);
                }).catch(error => {
                    console.log(`Error: ${error}`);
                })
    }

})


client.initialize()