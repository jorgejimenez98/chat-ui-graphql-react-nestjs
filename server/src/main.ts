import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { Logger } from 'nestjs-pino'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })

  app.useGlobalPipes(new ValidationPipe())
  app.useLogger(app.get(Logger))

  app.use(cookieParser())

  const configSerive = app.get(ConfigService)
  await app.listen(configSerive.getOrThrow('PORT'))
}
bootstrap()
