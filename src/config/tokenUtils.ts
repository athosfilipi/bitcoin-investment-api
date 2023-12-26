// utils/tokenUtils.ts
import { sign } from 'jsonwebtoken';
import { User } from '../models/user';

export function generateAuthToken(user: User): string {
  const secretKey = 'seuSegredo';
  const expiresIn = '1h';
  return sign({ userId: user.id, email: user.email }, secretKey, { expiresIn });
}
