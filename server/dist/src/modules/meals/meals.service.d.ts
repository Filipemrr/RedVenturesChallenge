import { Repository } from 'typeorm';
import { ProteinEntity } from "../../core/data/entities/proteinEntity/protein.entity";
import { BrothEntity } from "../../core/data/entities/brothEntity/broth.entity";
import { ProteinFactory } from "./factories/protein.factory";
import { BrothFactory } from "./factories/broth.factory";
import { IngredientDTO } from "./dtos/Ingredient.dto";
export declare class MealsService {
    private proteinRepository;
    private brothRepository;
    private proteinFactory;
    private brothFactory;
    constructor(proteinRepository: Repository<ProteinEntity>, brothRepository: Repository<BrothEntity>, proteinFactory: ProteinFactory, brothFactory: BrothFactory);
    addNewProtein(prospectIngredient: IngredientDTO): Promise<object>;
    addNewBroth(prospectIngredient: IngredientDTO): Promise<object>;
    getListOfBroths(): Promise<IngredientDTO[]>;
    getListOfProteins(): Promise<IngredientDTO[]>;
}
