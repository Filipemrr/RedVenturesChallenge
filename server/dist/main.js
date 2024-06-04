"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('AeC API')
        .setDescription('Backend Da Aplicacao RedVentures, teste tecnico')
        .setVersion('1.0')
        .addTag('RedVentures')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: 'http://localhost:63342',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.getHttpAdapter().get('/docs-json', (req, res) => {
        res.json(document);
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map