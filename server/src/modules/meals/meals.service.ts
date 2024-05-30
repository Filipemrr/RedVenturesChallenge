import {
    Inject,
    Injectable,
} from "@nestjs/common";
import { Repository } from 'typeorm';
import {ProteinEntity} from "../../core/data/entities/proteinEntity/protein.entity";
import {BrothsEntity} from "../../core/data/entities/brothsEntity/broths.entity";
import {ProteinDto} from "./dtos/Protein.dto";


@Injectable()
export class MealsService {
    constructor(
        @Inject('PROTEIN_REPOSITORY')
        private proteinRepository: Repository<ProteinEntity>,

        @Inject('BROTH_REPOSITORY')
        private brothRepository: Repository<BrothsEntity>,
    ) {}

    async addNewProtein(prospectProtein: ProteinDto): Promise<object> {
        return {prospectProtein}
    }
}