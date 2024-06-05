"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const protein_entity_1 = require("../../core/data/entities/protein.entity");
const broth_entity_1 = require("../../core/data/entities/broth.entity");
const newOrder_factory_1 = require("./factories/newOrder.factory");
const order_entity_1 = require("../../core/data/entities/order.entity");
const typeorm_2 = require("@nestjs/typeorm");
let OrderService = class OrderService {
    constructor(orderRepository, proteinRepository, brothRepository, newOrderFactory) {
        this.orderRepository = orderRepository;
        this.proteinRepository = proteinRepository;
        this.brothRepository = brothRepository;
        this.newOrderFactory = newOrderFactory;
    }
    async processNewOrder(newProtein) {
        const protein = await this.proteinRepository.findOne({ where: {
                id: parseInt(newProtein.proteinId)
            } });
        const broth = await this.brothRepository.findOne({ where: {
                id: parseInt(newProtein.brothId)
            } });
        if (!protein || !broth)
            throw new common_1.NotFoundException("brothId or proteinId are invalid");
        const generateOrder = await this.newOrderFactory.create(broth.name, protein.name);
        await this.orderRepository.save(generateOrder);
        return { id: generateOrder.id, description: generateOrder.description, image: generateOrder.image };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(order_entity_1.OrderEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(protein_entity_1.ProteinEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(broth_entity_1.BrothEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        newOrder_factory_1.OrderFactory])
], OrderService);
//# sourceMappingURL=order.service.js.map