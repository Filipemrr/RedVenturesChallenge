import { DataSource } from 'typeorm';
import { ProteinEntity } from './protein.entity';

export const proteinEntityProvider = [
    {
        provide: 'PROTEIN_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(ProteinEntity),
        inject: ['DATA_SOURCE'],
    },
];