import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { DatabaseModule } from "../../core/data/database.module";
import {MealsController} from "./meals.controller";
import {proteinEntityProvider} from "../../core/data/entities/proteinEntity/protein.providers";
import {brothEntityProviders} from "../../core/data/entities/brothEntity/broth.providers";
import {MealsService} from "./meals.service";
import {ProteinFactory} from "./factories/protein.factory";
import {BrothFactory} from "./factories/broth.factory";

@Module({
    imports: [DatabaseModule],
    controllers: [MealsController],
    providers: [...brothEntityProviders, ...proteinEntityProvider, MealsService, ProteinFactory, BrothFactory ],
    exports: [MealsService],
})
export class MealsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply()
            .forRoutes();
    }
}