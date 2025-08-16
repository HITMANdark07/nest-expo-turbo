import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
import { resolve } from 'path';
import { validateEnv, envUtils } from './utils';

// Load environment variables from root .env file
config({ path: resolve(__dirname, '../../../.env') });

async function bootstrap() {
  // Validate and load environment variables
  const env = validateEnv();
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend
  app.enableCors({
    origin: envUtils.isProduction() ? [env.PUBLIC_API_URL] : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  // Enable validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('App API')
    .setDescription('The application API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(env.API_PORT, env.API_HOST);
  logger.log(
    `Application is running on: http://${env.API_HOST}:${env.API_PORT}`,
  );
  logger.log(`Environment: ${env.NODE_ENV}`);
  logger.log(`Debug mode: ${env.DEBUG}`);
  logger.log(
    `Swagger documentation is available at: http://${env.API_HOST}:${env.API_PORT}/api/docs`,
  );
}

bootstrap();
