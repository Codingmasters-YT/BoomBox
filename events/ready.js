module.exports = async (client) => {
   console.log(`${client.user.username} is ready and running✅`);
 



    client.user.setActivity(client.config.game);

};