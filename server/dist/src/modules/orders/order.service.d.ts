import { Repository } from 'typeorm';
import { ProteinEntity } from "../../core/data/entities/protein.entity";
import { BrothEntity } from "../../core/data/entities/broth.entity";
import { OrderFactory } from "./factories/newOrder.factory";
import { PostOrderDTO } from "./dtos/PostOrder.dto";
import { OrderEntity } from "../../core/data/entities/order.entity";
export declare class OrderService {
    private orderRepository;
    private proteinRepository;
    private brothRepository;
    private newOrderFactory;
    constructor(orderRepository: Repository<OrderEntity>, proteinRepository: Repository<ProteinEntity>, brothRepository: Repository<BrothEntity>, newOrderFactory: OrderFactory);
    processNewOrder(newProtein: PostOrderDTO): Promise<{
        id: string;
        description: string;
        image: string;
    }>;
}
