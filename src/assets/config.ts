import { bot } from "..";
import { commandList } from "./data";

export async function BotConfig() {
	bot.setMyCommands(commandList);
}
