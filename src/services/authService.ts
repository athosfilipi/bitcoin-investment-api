// authService.ts
import { generateToken } from '../config/jwt';
import { RegistrationDTO } from '../dto/RegistrationDTO';
import { LoginDTO } from '../dto/LoginDTO';
import UserService from './UserService/UserService';
import { User } from '@src/models/user';

export class AuthService {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async register(registrationDTO: RegistrationDTO): Promise<{ user: User; token: string }> {
    // Lógica para registrar um novo usuário
    const user = await this.userService.register(registrationDTO);
    const token = generateToken(user);
    return { user, token };
  }

  async login(loginDTO: LoginDTO): Promise<{ user: User; token: string } | null> {
    // Lógica para realizar o login do usuário
    const user = await this.userService.login(loginDTO.email, loginDTO.senha);

    if (user) {
      const token = generateToken(user);
      return { user, token };
    } else {
      return null;
    }
  }
}
