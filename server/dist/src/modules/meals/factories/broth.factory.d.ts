import { BrothEntity } from "../../../core/data/entities/broth.entity";
import { IngredientDTO } from "../dtos/Ingredient.dto";
export declare class BrothFactory {
    create(newIngredient: IngredientDTO): BrothEntity;
}
