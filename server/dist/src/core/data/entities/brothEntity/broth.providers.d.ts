import { DataSource } from 'typeorm';
import { BrothEntity } from './broth.entity';
export declare const brothEntityProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<BrothEntity>;
    inject: string[];
}[];
