import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('BROTH')
export class BrothEntity {
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