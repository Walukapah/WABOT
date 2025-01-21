



const config = require('../config')
const {cmd} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted }) => {
    try {
        return await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: config.ALIVE_MSG }, { quoted: mek });
    } catch (e) {
        console.log(e);
        conn.sendMessage(from, { text: `${e}` }, { quoted: mek });
    }
});
