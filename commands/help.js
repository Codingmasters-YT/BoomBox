exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: '#E70000',
            author: { name: 'BOOMBOX Help' },
            footer:{ text: 'Created by Codemasters' },
            fields: [
                { name: 'Bot Commands', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `pb`, `loop`, `volume`, `skip`, `stop`, `ping`, `invite`' },
            ],
            timestamp: new Date(),
            description: `__Help Menu__`,
        },
    });

};
