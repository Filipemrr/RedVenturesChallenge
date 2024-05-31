import {
    Inject,
    Injectable,
} from "@nestjs/common";
import { Repository } from 'typeorm';
import { ProteinEntity } from "../../core/data/entities/proteinEntity/protein.entity";
import { BrothEntity } from "../../core/data/entities/brothEntity/broth.entity";
import {IngredientDTO} from "./dtos/Ingredient.dto";
import { ProteinFactory } from './factories/protein.factory';
import {BrothFactory} from "./factories/broth.factory";

@Injectable()
export class MealsService {

    constructor(
        @Inject('PROTEIN_REPOSITORY')
        private proteinRepository: Repository<ProteinEntity>,

        @Inject('BROTH_REPOSITORY')
        private brothRepository: Repository<BrothEntity>,

        private proteinFactory: ProteinFactory,
        private brothFactory: BrothFactory,
    ) {}

    async addNewProtein(prospectIngredient: IngredientDTO): Promise<object> {
        const newProtein = this.proteinFactory.create(prospectIngredient);
        console.log(newProtein);
        //await this.proteinRepository.save(newProtein);
        return { message: 'Protein added successfully' };
    }
    async addNewBroth(prospectIngredient: IngredientDTO): Promise<object> {
        const newBroth = this.brothFactory.create(prospectIngredient);
        console.log(newBroth);
        //await this.brothRepository.save(newBroth);
        return { message: 'Brot added successfully' };
    }
}