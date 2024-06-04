import { Response } from "express";
import { MealsService } from "./meals.service";
import { IngredientDTO } from "./dtos/Ingredient.dto";
export declare class MealsController {
    private mealService;
    constructor(mealService: MealsService);
    getListOfBroths(res: Response, newBroth: IngredientDTO): Promise<Response>;
    getListOfProteins(res: Response, newBroth: IngredientDTO): Promise<Response>;
    addNewIngredient(res: Response, newProtein: IngredientDTO): Promise<Response>;
    addNewBroth(res: Response, newBroth: IngredientDTO): Promise<Response>;
}
