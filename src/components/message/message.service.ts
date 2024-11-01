import { admin_id_2, bot, localData } from "../..";

import { EnumCommands } from "../../assets/data";

export const MessageService = async () => {
	bot.on("message", async msg => {
		const chatId = msg.chat.id;
		const username = msg.from?.first_name;

		if (msg.text === EnumCommands.START) {
			await bot.sendMessage(chatId, "Приветствую! Это Актулка бот!");
			await bot.sendMessage(chatId, "Здесь Вы можете предложить новость");
			return bot.sendMessage(chatId, "Чтобы начать введите /sendmessage");
		}

		if (msg.text === EnumCommands.INFO) {
			await bot.sendMessage(chatId, "Актулка бот");
			await bot.sendMessage(chatId, "Версия: 1.0.0");
			await bot.sendMessage(chatId, "Автор: @swutIIk_get");
			return bot.sendMessage(chatId, "Для канала: @aktualka_news");
		}

		if (msg.text === EnumCommands.CANCEL && localData[chatId]) {
			return (localData[chatId] = false);
		}

		if (msg.text === EnumCommands.SEND_MESSAGE) {
			await bot.sendMessage(chatId, "Введите сообщение или отправьте фото");
			await bot.sendMessage(chatId, `Введите ${EnumCommands.CANCEL} чтобы отменить отправку.`);
			return (localData[chatId] = true);
		}

		if (localData[chatId]) {
			await bot.sendMessage(chatId, "Оправлено!");

			if (msg.photo) {
				await bot.sendMessage(admin_id_2, "Сообщение от " + username);
				await bot.sendPhoto(admin_id_2, msg.photo?.[0].file_id, { caption: msg.caption || "" });
			} else {
				await bot.sendMessage(admin_id_2, "Сообщение от " + username + ": " + msg.text);
			}

			return (localData[chatId] = false);
		}

		if (!msg.audio && !msg.voice && !msg.video && !msg.document) {
			await bot.sendMessage(chatId, "Простите. Я вас не понимаю.");
			return bot.sendMessage(chatId, "Используйте команды чтобы взаимодействовать со мной.");
		}
	});
};
