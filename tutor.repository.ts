import { Injectable } from '@nestjs/common';
mport { dataSource, repository } from 'typeorm';
import { Tutor } from './tutor.entity';

@Injectable()
export class TutorRepository {
    constructor(private dataSource: dataSource) {
        super(Tutor, dataSource.createEntityManager());
    }
}