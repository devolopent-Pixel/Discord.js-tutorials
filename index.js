const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('I am online!')
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    const prefix = '!'
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('Pinging...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp;

            resultMessage.edit(`Bot latency: \`\`${ping}\`\`, API latency: \`\`${client.ws.ping}\`\``)
        })
    }
});

client.login(config.token)