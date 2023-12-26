export function handleConnectionError(error: unknown) {
  if (error instanceof Error) {
    console.error("Erro ao conectar ao banco de dados:", error.message);
  } else {
    console.error("Erro desconhecido:", error);
  }
}