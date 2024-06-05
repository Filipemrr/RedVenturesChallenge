import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import {OrderController} from "./order.controller";
import {OrderService} from "./order.service";
import {OrderFactory} from "./factories/newOrder.factory";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BrothEntity} from "../../core/data/entities/broth.entity";
import {ProteinEntity} from "../../core/data/entities/protein.entity";
import {OrderEntity} from "../../core/data/entities/order.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BrothEntity, ProteinEntity, OrderEntity])],
    controllers: [OrderController],
    providers: [OrderService, OrderFactory ],
    exports: [OrderService],
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply()
            .forRoutes();
    }
}