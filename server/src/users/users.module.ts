import { Module } from '@nestjs/common'
import { DataBaseModule } from 'src/common/database/database.module'

import { User, UserSchema } from './entities/user.entity'
import { UsersRepository } from './users.repository'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
  imports: [DataBaseModule.forFeature([
    { name: User.name, schema: UserSchema}
  ])],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {}
