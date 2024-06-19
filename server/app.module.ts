import { Module } from '@nestjs/common';
import { OrderModule} from "./src/modules/orders/order.module";
import {MealsModule} from "./src/modules/meals/meals.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MealsModule,
        OrderModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            port: 5432,
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false,
        }),
    ],

})
export class AppModule {}