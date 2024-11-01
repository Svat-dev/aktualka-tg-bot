import { BotConfig } from "./assets/config";
import { MessageController } from "./components/message/message.controller";

export async function AppController() {
	await BotConfig();

	await MessageController();
}
