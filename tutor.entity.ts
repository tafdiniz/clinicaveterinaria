import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('Tutores')
export class Tutor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({ type: 'varchar', length: 100 })
    nome: string;

    @Column ({ type: 'varchar', length: 100, unique: true })
    cpf: string;

    @Column ({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column ({ type: 'varchar', length: 20 })
    telefone: string;

    @Column ({ type: 'text'})
    endereco: string;

    @Column ({ type: 'boolean', default: true })
    ativo: boolean;
}