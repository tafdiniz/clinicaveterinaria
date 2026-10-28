import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('especies')
export class Especie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100})
    nomePopular: string;

    @Column({ type: 'varchar', length: 100})
    nomeCientifico: string;

    @Column({ type: 'text'})
    descricao: string;

    @Column({type: 'boolean', default: true })
    domestico: boolean;

    @Column({type: 'boolean', default: true})
    ativo: boolean;
}