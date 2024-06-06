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
            url: process.env.DATABASE_URL,
            entities: [__dirname + '/**/*.entity{.ts,.js'],
            synchronize: true
        }),
    ],
})
export class AppModule {}