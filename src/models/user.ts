// user.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; // Certifique-se de importar da maneira correta com a sua biblioteca ORM

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  // Adicione mais campos conforme necessário

  // Lembre-se de que, na prática, você deve adicionar mais lógica aqui, como validações e métodos para manipular os dados do usuário
}
