import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('PROTEIN')
export class ProteinEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public type: string;

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