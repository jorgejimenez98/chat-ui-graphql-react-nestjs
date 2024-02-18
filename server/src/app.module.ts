import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import * as Joi from 'joi'
import { LoggerModule } from 'nestjs-pino'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { DataBaseModule } from './common/database/database.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [

    /* Mongo DB Connection */
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_DB_CONNECTION: Joi.string().required()
      })
    }),

    /* Database */
    DataBaseModule,

    /* Custom Logger */
    LoggerModule.forRootAsync({
      useFactory: (confirService: ConfigService) => {
        const isProduction = confirService.get('NODE_ENV') === 'production'
        return {
          pinoHttp: {
            transport: isProduction ? undefined : {
              target: 'pino-pretty',
              options: {
                singleLine: true
              }
            },
            level: isProduction ? 'info' : 'debug'
          }
        }
      },
      inject: [ConfigService]
    }),

    /* Graphql */
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),

    /* App Modules */
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
