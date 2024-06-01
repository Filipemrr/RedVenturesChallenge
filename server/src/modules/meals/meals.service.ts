import {
    Inject,
    Injectable,
} from "@nestjs/common";
import { Repository } from 'typeorm';
import { ProteinEntity } from "../../core/data/entities/proteinEntity/protein.entity";
import { BrothEntity } from "../../core/data/entities/brothEntity/broth.entity";
import { ProteinFactory } from "./factories/protein.factory";
import { BrothFactory } from "./factories/broth.factory";
import { IngredientDTO } from "./dtos/Ingredient.dto";

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
        const existingProtein = await this.proteinRepository.findOne({ where: { name: prospectIngredient.name } });
        if (existingProtein) {
            return { message: 'Protein already exists' };
        }
        const newProtein = this.proteinFactory.create(prospectIngredient);
        await this.proteinRepository.save(newProtein);
        return { message: 'Protein added successfully' };
    }

    async addNewBroth(prospectIngredient: IngredientDTO): Promise<object> {
        const existingBroth = await this.brothRepository.findOne({ where: { name: prospectIngredient.name } });
        if (existingBroth) {
            return { message: 'Broth already exists' };
        }
        const newBroth = this.brothFactory.create(prospectIngredient);
        await this.brothRepository.save(newBroth);
        return { message: 'Broth added successfully' };
    }

    async getListOfBroths(): Promise<IngredientDTO[]> {
        let listOfBroths: BrothEntity[];
        return listOfBroths = await this.brothRepository.find();
    }

    async getListOfProteins(): Promise<IngredientDTO[]> {
        let listOfProteins: BrothEntity[];
        return listOfProteins = await this.proteinRepository.find();
    }
}