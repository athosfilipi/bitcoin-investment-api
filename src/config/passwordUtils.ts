// utils/passwordUtils.ts
import { hash, compare } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return hash(password, saltRounds);
}

export async function comparePasswords(inputPassword: string, hashedPassword: string): Promise<boolean> {
  return compare(inputPassword, hashedPassword);
}
