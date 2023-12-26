// userService.ts
import { getRepository, Repository } from 'typeorm';
import { User } from '../models/user';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { AppDataSource } from '@src/data-source';

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository =  AppDataSource.getRepository(User);
  }

  async register(userDetails: { nome: string; email: string; senha: string }): Promise<User> {
    const { nome, email, senha } = userDetails;

    // Verifica se o e-mail já está em uso
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('E-mail já registrado');
    }

    // Cria um novo usuário
    const newUser = this.userRepository.create({
      nome,
      email,
      senha,
    });

    // Salva o novo usuário no banco de dados
    await this.userRepository.save(newUser);

    return newUser;
  }

  async login(email: string, senha: string): Promise<User | null> {
    // Verifica se o usuário existe
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return null; // Usuário não encontrado
    }

    // Verifica se a senha está correta (lembre-se de comparar hashes na prática)
    const isPasswordValid = await compare(senha, user.senha);
    if (!isPasswordValid) {
      return null; // Senha incorreta
    }

    return user;
  }

  generateAuthToken(user: User): string {
    const token = sign({ userId: user.id, email: user.email }, 'seuSegredo', { expiresIn: '1h' });
    return token;
  }
}
