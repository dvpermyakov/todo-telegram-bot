const {Telegraf} = require('telegraf')

const bot = new Telegraf("1383903178:AAGAKK4pq03_y1RVxWQ5l_Xpf9JXWoAhvxQ")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()