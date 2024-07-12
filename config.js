const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348160687374";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_05_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICA4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA5MixcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOQTFqQUlnenZaT2pFZHlZOFVIVi85UzlkcTdIQ0dGTzBrOW1OZFlIQnc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItSTBwZS0yd1JmS042TG5RYVU4UHVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5NTExYTZkLTYzNzktNGMwOC04MDUwLWYzZmJjMWE2ODNkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMTMsXG4gICAgICAxNzIsXG4gICAgICAyNDUsXG4gICAgICAyMDksXG4gICAgICAxMDUsXG4gICAgICAyNDEsXG4gICAgICAxNDgsXG4gICAgICAyNDAsXG4gICAgICAxMzMsXG4gICAgICAyMzgsXG4gICAgICAxOTUsXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDE3LFxuICAgICAgMzcsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDM2LFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMjU1LFxuICAgICAgOTcsXG4gICAgICAyNDksXG4gICAgICAxODMsXG4gICAgICA5NSxcbiAgICAgIDcyLFxuICAgICAgMTMwLFxuICAgICAgMTQ5LFxuICAgICAgMTE4LFxuICAgICAgMjQ3LFxuICAgICAgMjUwLFxuICAgICAgMTY4LFxuICAgICAgMjQzLFxuICAgICAgNDQsXG4gICAgICA2MyxcbiAgICAgIDIzNCxcbiAgICAgIDkwLFxuICAgICAgMTU0LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkM2RUI5WDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjA2ODczNzQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHaXdhJ3MgRXhjaGFuZ2VcIixcbiAgICBcImxpZFwiOiBcIjI0OTQ1NDA0OTgxMzUyOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0llajlZRUhFSmpLd2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMEZjQk1NcFJjZGZBNDFDa3JORTVRYU9FRlFyTWJTcmtSbElaM0xSRmVHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiUXFMWjRCL1o4Q0N5SWJyU1pKRUY5K3BtSUN6VHVEVlpibnBRNFVPY1Y1aFFPd2E3TmhqdEtaT0Z3UmticjNOdnFvNkhrYjhMUzJSUXVTZXo3QjBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIM1VGRXV6THZLY3YxcFR1Z1gzVXBwSFYrNU9oc3lQUko4ZUZlWE4yNGRYdU9leHFXKzlIcWhtS2VEV1RtYjZXMGcxcHk1djZxWVdxdklDZnlmeURBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYwNjg3Mzc0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzM5MDk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
