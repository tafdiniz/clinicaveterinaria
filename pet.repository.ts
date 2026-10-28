import { Injectable } from '@nestjs/common';
import { dataSource, repository } from 'typeorm';
import { Pet } from './pet.entity.js';

@Injectable()
export class PetRepository extends repository<Pet> {
    constructor(private dataSource: dataSource) {
        super(Pet, dataSource.createEntityManager());
    }
}