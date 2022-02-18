module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Here are your search results for ${query}✅` },
            footer: { text: 'Thank you for using me' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
            console.log("search Ready✅")
};