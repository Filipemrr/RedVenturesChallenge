import { DataSource } from 'typeorm';
import { ProteinEntity } from './protein.entity';
export declare const proteinEntityProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProteinEntity>;
    inject: string[];
}[];
