import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })

  app.useGlobalPipes(new ValidationPipe())
  app.useLogger(app.get(Logger))

  const configSerive = app.get(ConfigService)
  await app.listen(configSerive.getOrThrow('PORT'))
}
bootstrap()
