/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


const config = require("../config.js");
const { ActivityType  } = require("discord.js")
module.exports = async (client) => {


if (config.mongodbURL || process.env.MONGO) {

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Commands Loaded!')
} catch (err) {
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Commands Distracted!');
}
})();

console.log('\x1b[32m%s\x1b[0m', `|    🌼 Logged in as ${client.user.username}`);


let status = [
  {
    name: `Chúc bạn có khoảng thời gian vui vẻ trong Study Together`, 
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=xVd8jNC_lTE'
    
  },

  {
    name: `ìm bạn học chung tại Study Together nèeee!!`, 
    type: ActivityType.Watching
    
  },
  {
    name: `Học tập tại Study Together nhé!!`, 
    type: ActivityType.Listening
    
  }

]

setInterval(() => {
  let random = Math.floor(Math.random() * status.length);
  client.user.setActivity(status[random]);
}, 20000);
client.errorLog = config.errorLog
} else {
console.log('\x1b[36m%s\x1b[0m', `|    🍔 Error MongoDB!`)
}
console.log('\x1b[36m%s\x1b[0m', `|    🎯 Activity sucessfully set!`);


if(client.config.voteManager.status === true && client.config.voteManager.api_key){
const { AutoPoster } = require('topgg-autoposter')
const ap = AutoPoster(client.config.voteManager.api_key, client)
ap.on('posted', () => {
})
}

}
/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

