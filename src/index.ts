import * as botApi from "node-telegram-bot-api";

import { AppController } from "./app.controller";

// const API_KEY = process.env.API_KEY;
// export const admin_id = process.env.ADMIN_ID!;
// export const admin_id_2 = process.env.ADMIN_ID_2!;

const API_KEY = "7868199007:AAE47UIlKIbCmx6jtXto_PQ0XinKEklfX-4";

export const admin_id = 1188285524;
export const admin_id_2 = 5478105927;

export const bot = new botApi(API_KEY!, { polling: true });
export const localData: Record<number, boolean> = {};

function main() {
	AppController();
}

main();