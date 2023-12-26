import { getRepository, Repository, FindOneOptions } from 'typeorm';
import { User } from '../models/user';

interface IUserRepository {
  create: (data: Partial<User>) => Promise<User>;
  find: (id: number) => Promise<User | null>; // Ajuste o tipo de retorno para User | null
  // ... outros métodos necessários
}

export default class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  public async find(id: number): Promise<User | null> { // Ajuste o tipo de retorno para User | null
    return await this.userRepository.findOne(id); // Forneça opções vazias {}
  }

  // ... outros métodos necessários
}
