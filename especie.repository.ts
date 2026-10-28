import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Especie } from './especie.entity.js'

@Injectable()
export class EspecieRepository extends Repository<Especie> {
    constructor(private dataSource: DataSource) {
        super(Especie, dataSource.createEntityManager());
    }
}