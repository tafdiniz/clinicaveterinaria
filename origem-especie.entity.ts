import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('origens_especie')
export class OrigemEspecie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100})
    continente: string;

    @Column({ type: 'varchar', length: 100})
    pais: string;

    @Column({ type: 'varchar', length: 100})
    regiao: string;

    @Column({ type: 'text'})
    descricao: string;

    @Column({ type: 'boolean', default: true})
    ativo: boolean;
}