"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderEntityProviders = void 0;
const order_entity_1 = require("./order.entity");
exports.orderEntityProviders = [
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(order_entity_1.OrderEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=order.providers.js.map