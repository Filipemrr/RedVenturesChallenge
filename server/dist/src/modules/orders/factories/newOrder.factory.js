"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFactory = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("../../../core/data/entities/order.entity");
const axios_1 = require("axios");
const dotenv = require("dotenv");
const process = require("process");
dotenv.config();
let OrderFactory = class OrderFactory {
    async create(brothName, proteinName) {
        const order = new order_entity_1.OrderEntity();
        order.id = await this.generateOrderId();
        order.description = this.getOrderDescription(brothName, proteinName);
        order.image = this.getOrderImage(proteinName);
        return order;
    }
    async generateOrderId() {
        try {
            const getId = await axios_1.default.post(`https://api.tech.redventures.com.br/orders/generate-id`, {}, {
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            });
            const { orderId } = getId.data;
            return orderId;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error('Error generating ID', error.response?.data);
            }
            else {
                console.error('Unknown error:', error);
            }
        }
    }
    getOrderImage(protein) {
        return `https://tech.redventures.com.br/icons/ramen/ramen${protein}.png`;
    }
    getOrderDescription(broth, protein) {
        return `${broth} and ${protein} Ramen`;
    }
};
exports.OrderFactory = OrderFactory;
exports.OrderFactory = OrderFactory = __decorate([
    (0, common_1.Injectable)()
], OrderFactory);
//# sourceMappingURL=newOrder.factory.js.map