// config/jwt.ts
import jwt from 'jsonwebtoken';

const secretKey = 'suaChaveSecreta'; // Substitua com sua chave secreta real, geralmente você deve armazenar isso de forma segura

export function generateToken(payload: any, expiresIn: string = '1h'): string {
  return jwt.sign(payload, secretKey, { expiresIn });
}
