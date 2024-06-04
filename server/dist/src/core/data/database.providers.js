"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const process = require("process");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                port: 5432,
                host: process.env.DB_HOST,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map