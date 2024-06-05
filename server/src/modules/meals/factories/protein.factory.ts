import {IngredientDTO} from "../dtos/Ingredient.dto";
import {ProteinEntity} from "../../../core/data/entities/protein.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ProteinFactory {
    create(newIngredient: IngredientDTO) {
        const protein = new ProteinEntity();
        protein.type = newIngredient.type;
        protein.imageInactive = newIngredient.imageInactive;
        protein.imageActive = newIngredient.imageActive;
        protein.name = newIngredient.name;
        protein.description = newIngredient.description;
        protein.price = newIngredient.price;
        return protein;
    }
}