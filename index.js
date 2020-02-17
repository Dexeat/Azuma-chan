const Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');
var token = fs.readFileSync('token.txt').toString()

const PREFIX = "!";

function sendError(message, description){
    message.channel.send({embed:{
        color: 15158332,
        description: ':x:' + description
    }
    
    })
}

bot.on('ready',function(){
    console.log("je suis pret")
});

bot.on('message', message => {
    console.log(message.author+' '+message.content);
    if(message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === '!aide'){
            if(splitMessage.length === 2){
                message.reply('Paramètre: '+ splitMessage[1]);
            }
            else
                sendError(message, 'Erreur, problème dans les paramètres');
            //message.reply('Oui ?')
        }
    }
});

bot.login(token)