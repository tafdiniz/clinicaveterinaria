import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('Racas')
export class Raca {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'varchar', length: 100 })
    porte: string;

    @Column({ type: 'text'})
    descricao: string;

    @Column({type: 'int'})
    expectativaVida: number;

    @Column({type: 'boolean', default: true})
    ativo: boolean;
}