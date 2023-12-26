// index.ts
import { gracefulShutdown } from "@express/server";

import { startApp } from "./config/appConfig";

(async () => {
  try {
    const server = await startApp();

    if (server) {
      process.on("SIGINT", gracefulShutdown);
      process.on("SIGTERM", gracefulShutdown);
      process.on("exit", gracefulShutdown);
    }
  } catch (error) {
    // console.error("\n", new Error(JSON.stringify(error)));
    // Chama gracefulShutdown diretamente, sem passar um servidor
    gracefulShutdown()(1); // Código de saída 1 indica um erro durante o shutdown
  }
})();
