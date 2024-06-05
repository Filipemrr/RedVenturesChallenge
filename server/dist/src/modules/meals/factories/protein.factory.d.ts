import { IngredientDTO } from "../dtos/Ingredient.dto";
import { ProteinEntity } from "../../../core/data/entities/protein.entity";
export declare class ProteinFactory {
    create(newIngredient: IngredientDTO): ProteinEntity;
}
