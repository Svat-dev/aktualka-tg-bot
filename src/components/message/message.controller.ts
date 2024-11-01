import { MessageService } from "./message.service";

export async function MessageController() {
	await MessageService();
}
