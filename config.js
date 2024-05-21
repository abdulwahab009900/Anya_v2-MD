const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "923285715826" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 

global.mongoUrl = process.env.MongoDB || "Enter"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Pika~Kun",
  ownernumber: process.env.Owner_Number || "923285715826",
  adress: process.env.Continent || "Asia, India, Assam",
  timezone: process.env.TimeZone || "Asia/Kolkata", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "example@example.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "",eyJub2l_AN_YA_zZUtl_AN_YA_eSI6eyJwcml_AN_YA_2YXRl_AN_YA_Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUw0dXA2VFhPNkJpV2p5OUdndHFZaXgwVGh3bjdtTjhjODNybW1OTjBXaz0ifSwicHVibGl_AN_YA_jIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2E4Q3JXZWdLckh0UWVl_AN_YA_d2dQdm1pMkVIVG5TT3ZYL1RIaWU4cWdjRl_AN_YA_IzYz0ifX0sInBhaXJpbmdFcGhl_AN_YA_bWVyYWxLZXl_AN_YA_QYWl_AN_YA_yIjp7InByaXZhdGUiOnsidHl_AN_YA_wZSI6IkJ1ZmZl_AN_YA_ciIsImRhdGEiOiIrRDFqMDB1MThVMEdLSnNYbGNyenl_AN_YA_vSDRxR0pXSEQ0MzIwRUpLNWM2T2tjPSJ9LCJwdWJsaWMiOnsidHl_AN_YA_wZSI6IkJ1ZmZl_AN_YA_ciIsImRhdGEiOiI1bWl_AN_YA_yOFFtRjdhOFFpZkpRcHBJUzJocS9l_AN_YA_aFFGdXJ1UkJnWnFsamVJZVdVPSJ9fSwic2l_AN_YA_nbmVkSWRl_AN_YA_bnRpdHl_AN_YA_LZXkiOnsicHJpdmF0ZSI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6Ik1QK2g3SFl_AN_YA_5U0ZhNXFVQW5uUDZxMFZ6ZW1uazgwdW84aHl_AN_YA_5UDBMUVEwWFU9In0sInB1YmxpYyI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6IkZ5bnJVYXl_AN_YA_iWE10WUEyL0w2Sl_AN_YA_hDV2ducTZaTGk0TzVMOWZmamtTY3YvMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml_AN_YA_2YXRl_AN_YA_Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RmWVZVSzkxbWRkaEU1SVZSYl_AN_YA_hieEVpUUtuN3RJNUFrbEw3NmdrU2pXaz0ifSwicHVibGl_AN_YA_jIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1pIcEV3Znp0VUxUK2JGYUJBdHd3bjhjSFBqNXNNK0xoaVZl_AN_YA_Qjc0Z3Jnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6InhpODBEUzdYeTN6WThsOUhOQ1FxVl_AN_YA_Fyaml_AN_YA_xYmYxY1l_AN_YA_tMnhCbEdJa2hzVysxMDVoSTdtUWV4Yzl_AN_YA_SaGMxbzBEK2RpbzYyNCtXL3BheFZ2UjRCTGtrNWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdl_AN_YA_Nl_AN_YA_Y3Jl_AN_YA_dEtl_AN_YA_eSI6Il_AN_YA_R0Umw3b2JXbl_AN_YA_BHb09sZGdhUXB1c0hYNWRXcDhwUjhNNEl_AN_YA_PUGF0Ly9VSW89IiwicHJvY2Vzc2VkSGl_AN_YA_zdG9yeU1l_AN_YA_c3NhZ2VzIjpbXSwibmV4dFByZUtl_AN_YA_eUl_AN_YA_kIjozMSwiZml_AN_YA_yc3RVbnVwbG9hZGVkUHJl_AN_YA_S2V5SWQiOjMxLCJhY2NvdW50U3l_AN_YA_uY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InphT1l_AN_YA_iRW44UzQtc20xdG51aDhXMnciLCJwaG9uZUl_AN_YA_kIjoiMzQ0NTYyNmQtYzQ0NS00MjczLWFiZTctNDNhZTQ5NTZhZDY2IiwiaWRl_AN_YA_bnRpdHl_AN_YA_JZCI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6Il_AN_YA_ROYXk0NFp5R0xDZl_AN_YA_ZVdmhEbi81eHFkR0NjST0ifSwicmVnaXN0ZXJl_AN_YA_ZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWS9jTVRMbkl_AN_YA_RcTZHNi9rTEI2THNPSzkxRUVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRl_AN_YA_dGFpbHMiOiJDSUtHNzNFUTMrbUxxd1l_AN_YA_ZQVE9PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4V01nbl_AN_YA_h5cHRuUnZCYnJ2MC84S2h3K3J1eUs3ZDRPZDc0WW5xU1dIV0drPSIsImFjY291bnRTaWduYXR1cmUiOiJSVXFPdnBzNHR1RXV6Ynl_AN_YA_jbWl_AN_YA_XN1QwM3AySGp0YWFweGVmOExHR0wvM2djN1NQbG1nZkxGdmx3SHc5OXRCcVl_AN_YA_qQXpubDl_AN_YA_4RGtXeTM3a3c0QWdmT3JDQT09IiwiZGV2aWNl_AN_YA_U2l_AN_YA_nbmF0dXJl_AN_YA_IjoicG9rbVRKN1RGWWxDWndYNzdzTXZFcEdsdFkrc0dFR1Q1V291dFA1Ul_AN_YA_VFL0l_AN_YA_HOU00aXhrd1l_AN_YA_0WjZmV1I1RGdEWWFYL0Q0citVSG43d091NTVyNE9qaGc9PSJ9LCJtZSI6eyJpZCI6IjkyMzM0ODU1MjY0MTozMUBzLndoYXRzYXBwLm5l_AN_YA_dCIsIm5hbWUiOiJhYmR1bHdhaGFiIn0sInNpZ25hbEl_AN_YA_kZW50aXRpZXMiOl_AN_YA_t7Iml_AN_YA_kZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0ODU1MjY0MTozMUBzLndoYXRzYXBwLm5l_AN_YA_dCIsImRl_AN_YA_dml_AN_YA_jZUl_AN_YA_kIjowfSwiaWRl_AN_YA_bnRpZml_AN_YA_l_AN_YA_cktl_AN_YA_eSI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6IkJmRmpJSjE4cWJaMGJ3VzY3OVAvQ29jUHE3c2l_AN_YA_1M2VEbmUrR0o2a2xoMWhwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGl_AN_YA_tZXN0YW1wIjoxNzAwOTg0MDM0LCJteUFwcFN0YXRl_AN_YA_S2V5SWQiOiJBQUFBQU5aayJ9
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "Queen Anya", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "true",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
