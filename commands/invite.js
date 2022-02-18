exports.run = async (client, message) => {
// at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#E70000')
	.setTitle('My invite link')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=944228660439826442&permissions=3230976&scope=bot')
	.setDescription('Invite Me Today!')

message.channel.send(exampleEmbed);
}
