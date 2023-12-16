import { gracefulShutdown, start } from "@express/server";

(async () => {
  try {
    const server = await start();
    // initConsumers()
    process.on("SIGINT", gracefulShutdown("SIGINT", server));
    process.on("SIGTERM", gracefulShutdown("SIGTERM", server));
    process.on("exit", (code) => gracefulShutdown(code, server));
} catch (error) {
    console.error("\n", new Error(JSON.stringify(error)));
    gracefulShutdown("SIGINT")    
} finally {
    process.on("SIGINT", gracefulShutdown("SIGINT"));
    process.on("SIGTERM", gracefulShutdown("SIGTERM"));
    process.on("exit", (code) => gracefulShutdown(code));
}
})();
