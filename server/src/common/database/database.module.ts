import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose'

import { DBMigrationService } from './db-migration.service'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (confirService: ConfigService) => ({
        uri: confirService.get('MONGO_DB_CONNECTION')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [DBMigrationService]
})

export class DataBaseModule {
  // Register all Schemas of the repository
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models)
  } 
}