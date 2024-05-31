import { DataSource } from 'typeorm';
import { BrothEntity } from './broth.entity';

export const brothEntityProviders = [
    {
        provide: 'BROTH_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(BrothEntity),
        inject: ['DATA_SOURCE'],
    },
];