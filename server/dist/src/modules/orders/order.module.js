"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const newOrder_factory_1 = require("./factories/newOrder.factory");
const typeorm_1 = require("@nestjs/typeorm");
const broth_entity_1 = require("../../core/data/entities/broth.entity");
const protein_entity_1 = require("../../core/data/entities/protein.entity");
const order_entity_1 = require("../../core/data/entities/order.entity");
let OrderModule = class OrderModule {
    configure(consumer) {
        consumer
            .apply()
            .forRoutes();
    }
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([broth_entity_1.BrothEntity, protein_entity_1.ProteinEntity, order_entity_1.OrderEntity])],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, newOrder_factory_1.OrderFactory],
        exports: [order_service_1.OrderService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map