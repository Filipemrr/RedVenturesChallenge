import {BrothEntity} from "../../../core/data/entities/brothEntity/broth.entity";
import {IngredientDTO} from "../dtos/Ingredient.dto";
import {Injectable} from "@nestjs/common";


@Injectable()
export class BrothFactory {
    create(newIngredient: IngredientDTO) {
        const broth = new BrothEntity();
        broth.type = newIngredient.type;
        broth.imageInactive = newIngredient.imageInactive;
        broth.imageActive = newIngredient.imageActive;
        broth.name = newIngredient.name;
        broth.description = newIngredient.description;
        broth.price = newIngredient.price;
        return broth;
    }
}