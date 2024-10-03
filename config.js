const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6N8k1RRT#Zujo4A1f1yz06-o9KbH7ad5MIeG1g_CbZdb6ty7fYHM",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
