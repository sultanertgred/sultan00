const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";

client.on('ready', () => {
    console.log('I am ready!');
});
////////////////////////////////////////////////////////////




/////////////////////////////////تجربت اكواد


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Gamers"));
    });



/////////////////////////////////////////////وامر عامه

client.on('message' , message => {
if(message.content === '/help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
**__وصف عن البوت__**
**
[❖─═════ {✯ :globe_with_meridians: الأوامر العامه ✯} ═════─❖]
اذا منشنت البوت يرد عليك ➥: منشن البوت
/invite-link :➥ لمعرفت روابط الانفيت حقك
/invites :➥ لمعرفت كم شخص دخلته السيرفر
/topinv :➥ توب انفيت
/ping :➥ لمعرفة سرعة استجابة البوت في الوقت الحالي
/server :➥ يعرض معلومات السيرفر
/id :➥ يعرض معلوماتك
/image :➥ يعرض صورت السيرفر
/avatar :➥ يظهر صورة بروفايلك
/new :➥ امر فتح  تذكرة
[❖─═════ {✯ :radioactive: اوامر الاداره ✯} ═════─❖]
/bc :➥ برودكاست مطور
امر الباند ➥: /باند
يقفل الشات ➥: /قفل
يفتح الشات ➥: /فتح
يمسح الشات ➥: /مسح
لاعطاء ميوت كتابي وصوتي لشخص ➥: /اسكت
لفك الميوت الكتابي و الصوتي عن الشخص ➥: /تكلم
**
`);
}
})

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});




client.on('ready', function(){
    var ms = 9000 ;
    var setGame = [' /help ',' Legendary Gamers.. '];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/n3k4a`);
    }, ms);

})





client.on("message", async message => {
            if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var leave = 0
        var guild = message.guild
        await guild.fetchInvites()

             
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `**لقد دعوت ${nul} شخص
                    **`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `**لم تدعو اي شخص للسيرفر**`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
    
        if(message.content.startsWith(prefix + 'invite-link')) {
let guild = message.guild
var codes = [""]
message.channel.send("**تم ارسال رابط الدعوه الخاص بك الي الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `**ليس لديك اي رابط إنفايت في السيرفر!**`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`روابط الإنفايت الخاصه بك في سيرفر ${message.guild.name}`, `الروابط :point_down: :\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});









client.on('message',message =>{
    var prefix = "/";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`**invite:** ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://d.top4top.net/p_1074mpt301.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });



client.on('message', message => {
            if (message.content.startsWith("/help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     Help ' ,' **تم ارسال الاوامر الي الخاص ✉**')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});










client.on('message', function(msg) {
    const prefix = '/'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });




client.on("message", message => {
    const prefix = "/"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



client.on('message', message => {
    if (message.content.startsWith("/avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('KilS CommunitY ',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});



client.on("message", msg => {
  if(msg.content === '/' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("/new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجي شرح سبب فتح هذا التذكرة . سيكون فريق الدعم لدينا قريبا للمساعدة`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("/close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`%close\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '/close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});



client.on('message' , message => {
  var prefix = "/";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 



 /////////////////////////////////////////////وامر اداريه


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "باند") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});











client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "مسح") {
        const emoji = client.emojis.find("name", "logs")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها 👌```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});








client.on('message', message => {

    if (message.content === "/قفل") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "/فتح") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات ✅")
           });
             }



});




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});





client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "/اسكت") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي وصوتي**").catch(console.error);
  });
    }
  
  };
  
  });

//////////////////////

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "/تكلم") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });

  
  

//////////////////////////////////////////////////////////اوامر الرد التلقائي و البوت

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" **هلا !!**");
    }
});	

client.on('message', msg => {
  if(msg.content === 'باك')
              setTimeout(function() {  
msg.reply('**̨ﯣڶــڪــمۭ**')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'هلا')
              setTimeout(function() {  
msg.reply('**هلا حبي**')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
              setTimeout(function() {  
msg.reply('**ۏ؏ــڷــﯧْۧــڬــمۭ ۛ ּا̍ڶــڛۣــﻼ̍ۙمۭ ּﯟڔحۡــمۭــةﷲ ۖ ﷻ ﯣبــڕڪــٰٱ̍ٺــﯡۥ ۗ**')
              }, 00)
});







//////////////////////////////////////////////////اوامر ممنوع تعملها



////يبند اي شخص ينشر
client.on('message', message => {
    if (message.content.includes('discord.gg')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('ban <@' + message.author.id + '>')
       message.delete() 
       }
    }
          if (message.content.startsWith("ban ")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.ban().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {
                 },
                 title: 'بسبب النشر | ' + member.displayName + ' | تم تبنيدك',
                 color: 490101,
                 }
               });
           }
         ) 
       }
   });



client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["كل زق","كل خرا","كسمك","كلب","متناك"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("ممنوع السب"); 
  }
});








////////////////////////////////اشياء اخري












client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**ولكم نورت السيرفر
welcome to __Legendary Gamers__** 
 ${member}  
 `) 
}).catch(console.error)
})











////////////////////////////////////////////الترحيب و انفيت باي



 




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);