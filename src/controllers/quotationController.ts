// quotationController.ts
import { Request, Response } from 'express';

export const getQuotation = async (req: Request, res: Response): Promise<void> => {
  try {
    // Lógica para obter a cotação do bitcoin    
    // ...
    res.status(200).json({ buy: 50000, sell: 51000 }); // Substitua com os valores reais de compra e venda
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};