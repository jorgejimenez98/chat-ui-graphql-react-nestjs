import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import { DataBaseModule } from './common/database/database.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
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
    /* Graphql */
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    /* Modules */
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
