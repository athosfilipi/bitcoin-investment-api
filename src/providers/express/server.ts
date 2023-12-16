import app from "@express/app";
// import { router } from './routes';
// import { router as externalRouter } from './routes/externalRouter';
// import { router as externalRouterV2 } from './routes/externalRouterV2';
// import { logger } from '@ports/providers/logger';

export function start(): Promise<any> {
  const PORT: number = Number(process.env.PORT) || 0;

  const portValidateOptions: [number, boolean, boolean] = [
    PORT,
    !isNaN(PORT),
    PORT.toString().length === 4,
  ];
  const isValidPort: boolean = portValidateOptions.every(
    (option) => Boolean(option) === true
  );  
  
  if (!isValidPort) {
    return Promise.reject(`Missing or invalid PORT definition ${PORT} server`);
  }
    
  const server = app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
  });

  server.on('close', code => gracefulShutdown(code));
  return Promise.resolve(server);
}

export function gracefulShutdown(event, server = null) {
  return (event) => {
    console.info(`${event} signal received with code ${event}`);
    if(server){
      console.info("Has server..")
      console.info("Closing http server...");      
      return process.exit(0);      
    }
    return process.exit(0);
  };
}

