import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (confirService: ConfigService) => ({
        uri: confirService.get('MONGO_DB_CONNECTION')
      }),
      inject: [ConfigService]
    })
  ]
})

export class DataBaseModule {}