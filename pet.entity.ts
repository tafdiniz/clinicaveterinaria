import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('Pets')
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'date'})
    dataNascimento: Date;

    @Column({ type: 'varchar', length: 20 })
    raca: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    peso: number;

    @Column({ type: 'varchar', length: 20 })
    sexo: string;

    @Column({ type: 'boolean', default: true })
    castrado: boolean;

    @Column({ type: 'boolean', default: true })
    ativo: boolean;
}