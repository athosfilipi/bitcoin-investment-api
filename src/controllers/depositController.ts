// depositController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '@src/data-source';
import { User } from '@src/models/user';

export const makeDeposit = async (req: Request, res: Response): Promise<void> => {
  try {
    // Verifica se o usuário está autenticado (você pode ter uma função de middleware para isso)
    const userId = req.userId; // Este é um exemplo, ajuste conforme sua lógica de autenticação
    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const { amount } = req.body;

    // Verifica se o valor do depósito é válido
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Valor de depósito inválido.' });
    }

    // Obtém o usuário a partir do ID (você pode ter uma função utilitária para isso)
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Realiza a lógica de depósito (aqui você pode atualizar o saldo do usuário, enviar e-mails, etc.)
    // Exemplo simples: Atualiza o saldo na base de dados
    user.saldo += amount;
    await userRepository.save(user);

    // Aqui você pode adicionar lógica para enviar e-mails, registrar transações, etc.

    res.status(201).json({ message: 'Depósito realizado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
