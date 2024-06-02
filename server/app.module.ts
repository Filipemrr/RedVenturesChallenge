import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {MealsModule} from "./src/modules/meals/meals.module";
import {OrderModule} from "./src/modules/orders/order.module";
dotenv.config();
@Module({
    imports: [MealsModule, OrderModule],
})
export class AppModule {}