import { Server } from "http";
import app from "@express/app";

function validatePort(port: number): boolean {
  const isNumeric = !isNaN(port);
  const hasValidLength = port.toString().length === 4;
  return isNumeric && hasValidLength;
}

export function start(): Server {
  const PORT: number = Number(process.env.PORT) || 0;

  if (!validatePort(PORT)) {
    throw new Error(`Missing or invalid PORT definition ${PORT} server`);
  }

  const server: Server = app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
  });

  server.on("close", (code) => {
    console.log('on server close!!!')
    gracefulShutdown()(1) 
  })

  return server;
}

export function gracefulShutdown(event?: string, server?: Server) {
  return async (code?: number) => {
    console.info(`Received ${event || 'unknown'} signal in process ${process.pid}`);

    if (server) {
      server.close((error) => {
        if (error) {
          console.error("Error closing HTTP server:", error);
        } else {
          console.info("HTTP server closed");
        }
        process.exit(code || 0);
      });
    } else {
      console.info("No HTTP server to close");
      process.exit(code || 0);
    }
  };
}

