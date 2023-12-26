import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegistrationDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  constructor() {
    this.nome = "";
    this.email = "";
    this.senha = "";
  }
}
