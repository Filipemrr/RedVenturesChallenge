import { DataSource } from 'typeorm';
import { OrderEntity } from "./order.entity";
export declare const orderEntityProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<OrderEntity>;
    inject: string[];
}[];
