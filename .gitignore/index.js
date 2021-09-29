const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.content == prefix + "bot"){
        message.channel.send("Bip Boup , Bonjour je suis un bot qui a était crée par L1nx0u Bip Boup");
    }

        if(message.content == prefix + "nezuko"){
            message.channel.send("__Nezukoooo...__ https://tenor.com/view/zenitsu-nezuko-chan-happy-anime-gif-14810985");
                
            
    };
    Client.on("guildMemberAdd", member => {
        let embed = new.Discord.RichEmbed ()
        .setDescription("" + member.user + "viens d'arriver")
        .setFooter("Maintenant nous sommes" + member.guild.memberCount)
        .setColor("FFB800")
        .setImage(" https://tenor.com/view/zenitsu-nezuko-chan-happy-anime-gif-14810985")
    })
    

    if(message.content == prefix + "help"  ){
        message.channel.send("Voici les commandes| !help | !nezuko |");
    };

    message.react("🦾");

 
   if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Aucun membre n'as été trouvé ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " à bien été banni");
                }
                else {
                    message.reply(" Impossible de bannir ce membre");
                }
            }
        }
    }
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Aucun membre n'as été trouvé ou mal mentionné");
            }
            else {
                if(mention.kickable)                                                                                                                                                       {
                    mention.kick();
                    message.channel.send(mention.displayName + " à bien été kick");
                }
                else {
                    message.reply(" Impossible de kick ce membre");
                }
            }
        }
    }

    else if(message.content.startsWith(prefix + "mute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply(" Aucun membre n'as été trouvé ou mal mentionné")
        }
    }

    else {
        mentions.roles.add("Mute");
        message.reply(mention.displayName + " mute avec succés");
    }
       
    
});

Client.on("ready", function () {
    Client.user.setActivity(" !help Attend de nouvelle mise a jour de moi");
});


    

Client.login(process.env.TOKEN);
