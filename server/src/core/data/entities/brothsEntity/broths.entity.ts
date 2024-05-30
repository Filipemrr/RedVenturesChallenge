import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity('broths')
export class BrothsEntity {
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