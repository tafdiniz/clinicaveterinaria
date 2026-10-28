import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Raca } from './raca.entity.js';

@Injectable()
export class RacaRepository extends Repository<Raca> {
    constructor(private dataSource: DataSource) {
        super(Raca, dataSource.createEntityManager());
    }
}