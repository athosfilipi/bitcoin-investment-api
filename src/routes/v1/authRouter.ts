// authRouter.ts
import { UserService } from '@src/services/userService';
import { AuthService } from '@src/services/authService';

import { Router } from 'express';

const authRouter = Router();
const userService = new UserService();  // Crie uma instância de UserService
const authService = new AuthService(userService);  // Passe a instância de UserService para AuthService

authRouter.post('/register', authService.register);
authRouter.post('/login', authService.login);

export default authRouter;