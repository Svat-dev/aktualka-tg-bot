import { BotConfig } from "./assets/config";
import { MediaController } from "./components/media/media.controller";
import { MessageController } from "./components/message/message.controller";

export async function AppController() {
	await BotConfig();

	MediaController();
	MessageController();
}
