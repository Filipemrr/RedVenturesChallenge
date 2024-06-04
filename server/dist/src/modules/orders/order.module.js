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
const database_module_1 = require("../../core/data/database.module");
const order_controller_1 = require("./order.controller");
const protein_providers_1 = require("../../core/data/entities/proteinEntity/protein.providers");
const broth_providers_1 = require("../../core/data/entities/brothEntity/broth.providers");
const order_service_1 = require("./order.service");
const order_providers_1 = require("../../core/data/entities/orderEntity/order.providers");
const newOrder_factory_1 = require("./factories/newOrder.factory");
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
        imports: [database_module_1.DatabaseModule],
        controllers: [order_controller_1.OrderController],
        providers: [...order_providers_1.orderEntityProviders, ...broth_providers_1.brothEntityProviders, ...protein_providers_1.proteinEntityProvider, order_service_1.OrderService, newOrder_factory_1.OrderFactory],
        exports: [order_service_1.OrderService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map