import { DataSource } from 'typeorm';
import { BrothsEntity } from './broths.entity';

export const brothEntityProvider = [
    {
        provide: 'BROTH_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(BrothsEntity),
        inject: ['DATA_SOURCE'],
    },
];