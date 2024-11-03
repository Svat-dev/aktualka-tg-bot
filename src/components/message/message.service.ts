import { admin_id, bot, localData } from "../..";

import { EnumCommands } from "../../assets/data";

export const MessageService = async () => {
	bot.on("message", async msg => {
		const chatId = msg.chat.id;
		const username = msg.from?.first_name;

		if (msg.text === EnumCommands.START) {
			await bot.sendMessage(chatId, "Приветствую👋 Это Актуалка бот!");
			await bot.sendMessage(chatId, "Здесь Вы можете предложить новость");
			return bot.sendMessage(chatId, `Чтобы начать введите ${EnumCommands.SEND_MESSAGE}.`);
		}

		if (msg.text === EnumCommands.INFO) {
			await bot.sendMessage(chatId, "Актуалка бот");
			await bot.sendMessage(chatId, "Версия: 1.0.0");
			await bot.sendMessage(chatId, "Автор: @swutIIk_get");
			return bot.sendMessage(chatId, "Для канала: @aktyalka_novosti");
		}

		if (msg.text === EnumCommands.CANCEL && localData[chatId]) {
			return (localData[chatId] = false);
		}

		if (msg.text === EnumCommands.SEND_MESSAGE) {
			await bot.sendMessage(chatId, "Введите сообщение или отправьте фото");
			await bot.sendMessage(chatId, `Введите ${EnumCommands.CANCEL} чтобы отменить отправку.`);
			return (localData[chatId] = true);
		}

		if (localData[chatId] && (msg.photo || msg.text)) {
			try {
				if (msg.photo) {
					await bot.sendMessage(admin_id, "Сообщение от " + username);
					await bot.sendPhoto(admin_id, msg.photo?.[0].file_id, { caption: msg.caption || "" });
				} else {
					await bot.sendMessage(admin_id, "Сообщение от " + username + ": " + msg.text);
				}

				await bot.sendMessage(chatId, "✅ Оправлено!");
			} catch (error) {
				await bot.sendMessage(chatId, "❌ Произошла ошибка. Попробуйте позже.");
			}

			return (localData[chatId] = false);
		}

		if (!localData[chatId]) {
			await bot.sendMessage(chatId, "Простите 😔. Я вас не понимаю.");
			return bot.sendMessage(chatId, "Используйте команды чтобы взаимодействовать со мной.");
		}
	});
};
