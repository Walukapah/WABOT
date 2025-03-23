const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~SOhXmIJZ#-vpURKgKBLfDUhaXFp6gm96r0gsgR1c7esqqFdKABZc",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "iyoo whats up 💫",
};
