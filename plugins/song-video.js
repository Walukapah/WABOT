
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download the song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	
	if(!q) return reply("Please give url / title 📎")
	const search = await yts(q)
	const data = search.videos[0];
	const url =data.url
	
let desc = `
 ⚡ *SRIBOT SONG DOWNLOADER* ⚡
 
 *Title*: ${data.title}\n
 *Description*: ${data.description}\n
 *Time*: ${data.timestamp}\n
 *Ago*: ${data.ago}\n
 *Views*: ${data.views}\n
 
 *MADE BY SRIBOT* 👤
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//Download audio

let down = await ad.yta(url)
let downloadUrl = down.dl_url

//Send audio + document massage

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",captain:"> *MADE BY SRIBOT* 👤"},{quoted:mek})

}catch(e){
	console.log(e)
	reply(`${e}`)
}
})


//==============video-download=============

cmd({
    pattern: "video",
    desc: "Download the Video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	
	if(!q) return reply("Please give url / title 📎")
	const search = await yts(q)
	const data = search.videos[0];
	const url =data.url
	
let desc = `
 ⚡ *SRIBOT VIDEO DOWNLOADER* ⚡
 
 *Title*: ${data.title}\n
 *Description*: ${data.description}\n
 *Time*: ${data.timestamp}\n
 *Ago*: ${data.ago}\n
 *Views*: ${data.views}\n
 
 *MADE BY SRIBOT* 👤
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//Download video

let down = await ad.yta(url)
let downloadUrl = down.dl_url

//Send video + document massage

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",captain:"> *MADE BY SRIBOT* 👤"},{quoted:mek})
	
}catch(e){
	console.log(e)
	reply(`${e}`)
}
})