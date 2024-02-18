import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UsersModule } from 'src/users/users.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
  imports: [
    UsersModule, 
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: {
          expiresIn: +configService.getOrThrow('JWT_EXPIRATION')
        }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
