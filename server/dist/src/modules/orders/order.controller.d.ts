import { Response } from "express";
import { OrderService } from "./order.service";
import { PostOrderDTO } from "./dtos/PostOrder.dto";
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    addNewIngredient(res: Response, newOrderInfo: PostOrderDTO): Promise<Response>;
}
