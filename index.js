const Discord = require('discord.js');
const bot = new Discord.Client();
//lis le token
var fs = require('fs');
var token = fs.readFileSync('token.txt').toString()

//pour les commandes
const PREFIX = "!";

//si erreur
function sendError(message, description){
    message.channel.send({embed:{
        color: 15158332,
        description: ':x:' + description
    }
    
    })
}

//quand le bot se conecte 
bot.on('ready',function(){
    console.log("je suis pret")

    var Serveurs = bot.guilds;
    //console.log(Serveurs);

    bot.user.setPresence({
        game: {
            name: 'AzurLane',
            type:  'PLAYING'
        },
        status: 'dnd'
    })

});

//lis l'event des messages
bot.on('message', message => {
    //renvoie tous les messages des users sur tous les serveur ajouté
    console.log(message.guild +' '+ message.author+' '+message.content);

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
    if (message.content === '!invite'){
        message.reply('https://discordapp.com/oauth2/authorize?client_id=679005239860264964&scope=bot&permissions=8')
    }
    }
    
});

bot.on('messageReactionAdd',(reaction, user) => {
    if (reaction.emoji.name === "⬅️"){
        console.log('oui left')
        bot.channels.get("521409427526385675").send(':arrow_left:');
    }
    if (reaction.emoji.name === "➡️") {
        console.log('oui right')
        bot.channels.get("521409427526385675").send(':arrow_right:');
    }
});


bot.login(token)