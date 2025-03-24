const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eEMzjQ4K#zLqgPhVovAq6U3JjWivvSQF6zftciyhzwT1NWsbeTDA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "iyoo whats up 💫",
};
