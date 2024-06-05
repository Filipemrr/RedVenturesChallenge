import { Module } from "@nestjs/common";
import {MealsController} from "./meals.controller";
import {MealsService} from "./meals.service";
import {ProteinFactory} from "./factories/protein.factory";
import {BrothFactory} from "./factories/broth.factory";
import {BrothEntity} from "../../core/data/entities/broth.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProteinEntity} from "../../core/data/entities/protein.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BrothEntity, ProteinEntity])],
    controllers: [MealsController],
    providers: [MealsService, ProteinFactory, BrothFactory ],
    exports: [MealsService],
})
export class MealsModule {}