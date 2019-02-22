const Telegraf = require('telegraf');
const API_KEY = "770360803:AAGcVXhBOfvlSzIM-PkXZRa1lyMQMnzIxVI";


 
const bot = new Telegraf(API_KEY);

//modern syntax with default return

//bot.start((ctx) => ctx.reply('Welcome!'));
const helphandler = context => context.reply("Shaun is a bitch!");
//bot.on('sticker', (ctx) => ctx.reply('👍'));
//bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.help(helphandler);

bot.command("hello", context => context.reply("heyyo"));
bot.launch();




/*
function greet(name) {
    return "hello" + name;
}


const greet = function (name) {
    return "hello" + name;
}

//modern syntax
const greetagain = (name) => {
    return "hello" + name;
    const greet2 = name => hello + "name "
}*/