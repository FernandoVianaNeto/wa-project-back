import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const port = process.env.APP_PORT;
  console.log(port);
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Benefícios - API')
    .setDescription('Benefícios - API')
    .setExternalDoc('Download JSON', '/docs-json')
    .addBearerAuth({ type: 'http' }, 'App')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('/docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());

  process.on('uncaughtException', function () {});

  await app.listen(port, '0.0.0.0', () => {
    console.log('App:: listen on port', port);
  });
}

bootstrap().catch((err) => console.error(err));
