import {Body, Controller, Get, HttpStatus, Post, Res, UsePipes} from '@nestjs/common';
import { Response } from "express";
import {OrderService} from "./order.service";
import {CustomResponse} from "../../core/domain/ResponseModel/CustomResponse";
import {PostOrderDtoPipe} from "./pipes/postOrder.dto.pipe";
import {PostOrderDTO} from "./dtos/PostOrder.dto";
@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) {}
    @Post()
    @UsePipes(PostOrderDtoPipe)
    async addNewIngredient(
        @Res() res: Response,
        @Body() newOrderInfo: PostOrderDTO,
    ): Promise<Response> {
        const newOrder =
            await this.orderService.processNewOrder(newOrderInfo);
        return res
            .status(HttpStatus.OK)
            .json(new CustomResponse(200, 'success', newOrder));
    }
}