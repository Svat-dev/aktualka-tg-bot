import { type BotCommand } from "node-telegram-bot-api";

export enum EnumCommands {
	START = "/start",
	SEND_MESSAGE = "/sendmessage",
	INFO = "/info",
	CANCEL = "/cancel",
}

export const commandList: BotCommand[] = [
	{
		command: EnumCommands.START,
		description: "Перезапустить бота",
	},
	{ command: EnumCommands.SEND_MESSAGE, description: "Отправить идею" },
	{ command: EnumCommands.INFO, description: "Информация о боте" },
];
