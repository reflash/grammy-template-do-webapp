import { Bot } from "https://deno.land/x/grammy@v1.11.2/mod.ts";

const token = Deno.env.get("BOT_TOKEN")!;
const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();