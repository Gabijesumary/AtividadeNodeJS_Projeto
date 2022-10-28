import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async create(req): Promise<string> {
    return `${req.name} cadastrado com sucesso!`;
  }
  async findAll() {
    return ['Usuário 1', 'Usuário 2'];
  }
  async findOne(id: string) {
    return `Usuário ${id}`;
  }
}
