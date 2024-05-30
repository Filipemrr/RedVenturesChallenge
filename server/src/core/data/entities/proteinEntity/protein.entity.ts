import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('protein')
export class ProteinEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public imageInactive: string;

    @Column()
    public imageActive: string;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public price: number;
}