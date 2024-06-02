import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { DatabaseModule } from "../../core/data/database.module";
import {OrderController} from "./order.controller";
import {proteinEntityProvider} from "../../core/data/entities/proteinEntity/protein.providers";
import {brothEntityProviders} from "../../core/data/entities/brothEntity/broth.providers";
import {OrderService} from "./order.service";
import {orderEntityProviders} from "../../core/data/entities/orderEntity/order.providers";
import {OrderFactory} from "./factories/newOrder.factory";

@Module({
    imports: [DatabaseModule],
    controllers: [OrderController],
    providers: [...orderEntityProviders, ...brothEntityProviders, ...proteinEntityProvider, OrderService, OrderFactory ],
    exports: [OrderService],
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply()
            .forRoutes();
    }
}