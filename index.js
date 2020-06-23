process.env.NTBA_FIX_319 = 1;
const Promise = require("bluebird");
Promise.config({
  cancellation: true,
});
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "1066730846:AAHnB_5niPAq2rTklhdYDBe2zTe29SFAUac";
const bot = new TelegramBot(TOKEN, {
  polling: true,
});
bot.on("message", (msg) => {
  console.log(msg);
  bot.sendMessage(
    msg.chat.id,
    "Привет, я пока мало умею, но я написан ручками на node.js"
  );
});
