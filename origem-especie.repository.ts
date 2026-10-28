import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { OrigemEspecie } from "./origem-especie.entity.js";

@Injectable()
export class OrigemEspecieRepository extends Repository<OrigemEspecie> {
    constructor(private dataSource: DataSource) {
        super(OrigemEspecie, dataSource.createEntityManager());
    }
}