import { Injectable } from '@nestjs/common'

import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user'
  }

  findAll() {
    return this.usersRepository.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
