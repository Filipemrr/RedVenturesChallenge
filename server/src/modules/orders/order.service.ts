import {
    Inject,
    Injectable, NotFoundException,
} from "@nestjs/common";
import { Repository } from 'typeorm';
import { ProteinEntity } from "../../core/data/entities/proteinEntity/protein.entity";
import { BrothEntity } from "../../core/data/entities/brothEntity/broth.entity";
import {OrderFactory} from "./factories/newOrder.factory";
import {PostOrderDTO} from "./dtos/PostOrder.dto";
import {ReturnOrderDto} from "./dtos/returnOrder.dto";
import {OrderEntity} from "../../core/data/entities/orderEntity/order.entity";

@Injectable()
export class OrderService {

    constructor(
        @Inject('ORDER_REPOSITORY')
        private orderRepository: Repository<OrderEntity>,

        @Inject('PROTEIN_REPOSITORY')
        private proteinRepository: Repository<ProteinEntity>,

        @Inject('BROTH_REPOSITORY')
        private brothRepository: Repository<BrothEntity>,

        private newOrderFactory: OrderFactory,
    ) {}
    async processNewOrder(newProtein: PostOrderDTO) {
        const protein: ProteinEntity = await this.proteinRepository.findOne({ where: {
            id: parseInt(newProtein.proteinId)
            }})
        const broth: BrothEntity = await this.brothRepository.findOne({ where: {
            id: parseInt(newProtein.brothId)
            }})

        if (!protein || !broth)
            throw new NotFoundException("brothId or proteinId are invalid");

        const generateOrder = await this.newOrderFactory.create(broth.name,protein.name);
        await this.orderRepository.save(generateOrder); //save order in db
        return { id: generateOrder.id, description: generateOrder.description, image: generateOrder.image }
    }
}