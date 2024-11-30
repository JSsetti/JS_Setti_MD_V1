const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://images.app.goo.gl/B8Qa8GVr4uZp6HmA7",
ALIVE_MS: process.env.ALIVE_MSG || "Hellow I'm JSsetti_bot 🔥❗ I'm Alive Now 👋💖",
};
