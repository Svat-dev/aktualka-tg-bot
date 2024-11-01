import { bot, localData } from "../..";

export const MediaService = async () => {
	bot.on("message", async msg => {
		const chatId = msg.chat.id;
		const msgId = msg.message_id;

		if (msg.photo || msg.text) return;

		localData[chatId] = false;

		await bot.deleteMessage(chatId, msgId);
		return bot.sendMessage(chatId, "К сожалению вы не можете отправлять файл такого типа!");
	});
};
