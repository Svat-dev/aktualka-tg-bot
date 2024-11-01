import * as botApi from "node-telegram-bot-api";
import { AppController } from "./app.controller";

// const API_KEY = process.env.API_KEY;
// export const admin_id = process.env.ADMIN_ID!;
// export const admin_id_2 = process.env.ADMIN_ID_2!;

const API_KEY = "7689692647:AAHcR7OK3VC4WkZoIIULAsy63eNAKIk6jfo";

export const admin_id = 1188285524;
export const admin_id_2 = 5478105927;

export const bot = new botApi(API_KEY!, { polling: true });
export const localData: Record<number, boolean> = {};

function main() {
	AppController();
	// bot.on("message", msg => bot.sendMessage(msg.chat.id, msg.chat.id.toString()));
}

main();
