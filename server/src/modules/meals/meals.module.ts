import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { DatabaseModule } from "../../core/data/database.module";
import {MealsController} from "./meals.controller";
import {proteinEntityProvider} from "../../core/data/entities/proteinEntity/protein.providers";
import {brothEntityProvider} from "../../core/data/entities/brothsEntity/broths.providers";
import {MealsService} from "./meals.service";

@Module({
    imports: [DatabaseModule],
    controllers: [MealsController],
    providers: [...brothEntityProvider, ...proteinEntityProvider, MealsService ],
    exports: [MealsService],
})
export class MealsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply()
            .forRoutes();
    }
}