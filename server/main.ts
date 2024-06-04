import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('AeC API')
        .setDescription('Backend Da Aplicacao RedVentures, teste tecnico')
        .setVersion('1.0')
        .addTag('RedVentures')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });

    app.getHttpAdapter().get('/docs-json', (req, res) => {
        res.json(document);
    });

    await app.listen(3000);
}
bootstrap();