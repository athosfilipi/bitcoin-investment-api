// authController.ts
import { generateToken } from '@src/config/jwt';
import { LoginDTO } from '@src/dto/LoginDTO';
import { RegistrationDTO } from '@src/dto/RegistrationDTO';
import { UserService } from '@src/services/userService';
import { validateSync } from 'class-validator';
import { Request, Response } from 'express';

export class AuthController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const registrationDTO = Object.assign(new RegistrationDTO(), req.body);

      const validationErrors = validateSync(registrationDTO);
      if (validationErrors.length > 0) {
        res.status(400).json({ error: 'Invalid data', details: validationErrors });
        return;
      }

      const user = await this.userService.register(registrationDTO);
      const token = generateToken(user);

      res.status(201).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const loginDTO = Object.assign(new LoginDTO(), req.body);

      const validationErrors = validateSync(loginDTO);
      if (validationErrors.length > 0) {
        res.status(400).json({ error: 'Invalid credentials', details: validationErrors });
        return;
      }

      const user = await this.userService.login(loginDTO.email, loginDTO.senha);

      if (user) {
        const token = generateToken(user);
        res.status(200).json({ user, token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
