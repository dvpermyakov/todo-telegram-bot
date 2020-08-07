const {Telegraf} = require('telegraf')

const token = '1256094670:AAElEZ7LvEvl2o3PmQntIEL9owCx_aLRnyc'
const bot = new Telegraf(token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
})

const list = []

const helpStr = 'Create todo item by /add command. See your list by /list command.'
bot.start((ctx) => ctx.reply(helpStr))
bot.help((ctx) => ctx.reply(helpStr))

bot.command("add", (ctx) => {
    const mess = ctx.message.text.slice(5)
    if (mess.length === 0) {
        return ctx.reply(`Empty message. Try /add plus message.`)
    } else {
        list.push(mess)
        return ctx.reply(`${mess} is added`)
    }
})
bot.command("list", (ctx) => {
    let listStr = list.map(function (item, index) {
        return `${index + 1}. ${item}`
    }).join('\n')
    if (listStr.length === 0) {
        listStr = "Empty list"
    }
    return ctx.reply(listStr)
})
bot.hears(/(.+)/, (ctx) => {
    return ctx.reply("Can't handle this message. " + helpStr)
})

bot.launch()