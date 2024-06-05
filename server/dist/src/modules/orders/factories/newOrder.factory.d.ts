import { OrderEntity } from "../../../core/data/entities/order.entity";
export declare class OrderFactory {
    create(brothName: string, proteinName: string): Promise<OrderEntity>;
    private generateOrderId;
    private getOrderImage;
    private getOrderDescription;
}
