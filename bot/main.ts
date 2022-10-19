import { Bot, InlineKeyboard } from "https://deno.land/x/grammy@v1.11.2/mod.ts";

const token = Deno.env.get("BOT_TOKEN")!;
const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => {
    const inlineKeyboard = new InlineKeyboard().webApp(
        "Start react app",
        // use ngrok to test on local ngrok http http://<localhost or docker ip>:3000/ -region eu
        "https://orca-app-o8frq.ondigitalocean.app/",
      );
    return ctx.reply("Got another message!", {
        reply_markup: inlineKeyboard,
    });
});

bot.start();
