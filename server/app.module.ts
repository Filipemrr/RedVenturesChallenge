import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {MealsModule} from "./src/modules/meals/meals.module";
dotenv.config();
@Module({
    imports: [MealsModule],
})
export class AppModule {}