import {Body, Controller, Get, HttpStatus, Post, Res, UseGuards, UsePipes} from '@nestjs/common';
import { Response } from "express";
import {MealsService} from "./meals.service";
import {ProteinDtoPipe} from "./pipes/protein.dto.pipe";
import {IngredientDTO} from "./dtos/Ingredient.dto";
import {CustomResponse} from "../../core/domain/ResponseModel/CustomResponse";
import {BrothDtoPipe} from "./pipes/broth.dto.pipe";
import {GetIngredientsDtoPipe} from "./pipes/getIngredients.dto.pipe";
import {ApiKeyGuard} from "../../core/infra/middlewares/x-api-middleware";
@Controller('meals')
//@UseGuards(ApiKeyGuard) Desomente essa linha para proteger a API com uma chave
export class MealsController {
    constructor(private mealService: MealsService) {
    }

    @Get('/broth')
    async getListOfBroths(
        @Res() res: Response,
        @Body() newBroth: IngredientDTO,
    ): Promise<Response> {
        const listOfBroths =
            await this.mealService.getListOfBroths();
        return res
            .status(HttpStatus.OK)
            .json(new CustomResponse(200, 'success', listOfBroths));
    }
    @Get('/protein')
    async getListOfProteins(
        @Res() res: Response,
        @Body() newBroth: IngredientDTO,
    ): Promise<Response> {
        const listOfProteins =
            await this.mealService.getListOfProteins();
        return res
            .status(HttpStatus.OK)
            .json(new CustomResponse(200, 'success', listOfProteins));
    }
    @Post('/addNewProtein')
    @UsePipes(ProteinDtoPipe)
    async addNewIngredient(
        @Res() res: Response,
        @Body() newProtein: IngredientDTO,
    ): Promise<Response> {
        const registeredNewProtein =
            await this.mealService.addNewProtein(newProtein);
        return res
            .status(HttpStatus.OK)
            .json(new CustomResponse(200, 'success', registeredNewProtein));
    }
    @Post('/addNewBroth')
    @UsePipes(BrothDtoPipe)
    async addNewBroth(
        @Res() res: Response,
        @Body() newBroth: IngredientDTO,
    ): Promise<Response> {
        const registeredNewBroth =
            await this.mealService.addNewBroth(newBroth);
        return res
            .status(HttpStatus.OK)
            .json(new CustomResponse(200, 'success', registeredNewBroth));
    }


}