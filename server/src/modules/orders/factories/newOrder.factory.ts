import {Injectable} from "@nestjs/common";
import {OrderEntity} from "../../../core/data/entities/order.entity";
import {ReturnOrderDto} from "../dtos/returnOrder.dto";
import axios from "axios";
import * as dotenv from 'dotenv';
import * as process from "process";

dotenv.config();

@Injectable()
export class OrderFactory {
    async create(brothName: string, proteinName: string) {
        const order = new OrderEntity();
        order.id = await this.generateOrderId();
        order.description = this.getOrderDescription(brothName, proteinName);
        order.image = this.getOrderImage(proteinName);
        return order;
    }

    private async generateOrderId(): Promise<string> {
        try {
            const getId = await axios.post(
                `https://api.tech.redventures.com.br/orders/generate-id`,
                {},
                {
                    headers: {
                        'x-api-key':process.env.X_API_KEY
                    }
                }
            );
        const { orderId } = getId.data;
        return orderId;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error generating ID', error.response?.data);
            } else {
                console.error('Unknown error:', error);
            }
        }
    }
    private getOrderImage(protein: string): string {
        return `https://tech.redventures.com.br/icons/ramen/ramen${protein}.png`;
    }
    private getOrderDescription(broth: string, protein: string): string {
        return `${broth} and ${protein} Ramen`;
    }
}