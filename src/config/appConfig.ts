// config/appConfig.ts
import { Server } from 'http';
import { gracefulShutdown, start } from '@express/server';
import { handleConnectionError } from '@error_handlers/handleConnectionError';
import { AppDataSource } from '../data-source';

export async function startApp(attempt = 1): Promise<Server | null> {
  try {
    await AppDataSource.initialize();
    console.log('Conexão bem-sucedida com o banco de dados.');

    // Inicia o servidor Express após a inicialização bem-sucedida do aplicativo
    return await start();
  } catch (error) {
    handleConnectionError(error);
    if (attempt < 5) {
      // Lógica para lidar com o erro de conexão.
      // Pode incluir lógica de reconexão, registro de erro, etc.
      console.log(`Tentativa ${attempt}: Tentando reconectar em 5 segundos...`);
      await new Promise(resolve => setTimeout(resolve, 5000));
      return startApp(attempt + 1); // Tenta novamente com a próxima tentativa
    } else {
      console.error(`Falha na inicialização após ${attempt} tentativas.`);
      gracefulShutdown()(1);
      throw error; // Lança a exceção para indicar que a inicialização falhou
    }
  }
}

