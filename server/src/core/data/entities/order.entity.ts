import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('ORDER')
export class OrderEntity {
    @PrimaryColumn()
    public id: string;

    @Column()
    public description: string;

    @Column()
    public image: string;
}