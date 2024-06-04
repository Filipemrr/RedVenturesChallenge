"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsController = void 0;
const common_1 = require("@nestjs/common");
const meals_service_1 = require("./meals.service");
const protein_dto_pipe_1 = require("./pipes/protein.dto.pipe");
const Ingredient_dto_1 = require("./dtos/Ingredient.dto");
const CustomResponse_1 = require("../../core/domain/ResponseModel/CustomResponse");
const broth_dto_pipe_1 = require("./pipes/broth.dto.pipe");
const x_api_middleware_1 = require("../../core/infra/middlewares/x-api-middleware");
let MealsController = class MealsController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    async getListOfBroths(res, newBroth) {
        const listOfBroths = await this.mealService.getListOfBroths();
        return res
            .status(common_1.HttpStatus.OK)
            .json(new CustomResponse_1.CustomResponse(200, 'success', listOfBroths));
    }
    async getListOfProteins(res, newBroth) {
        const listOfProteins = await this.mealService.getListOfProteins();
        return res
            .status(common_1.HttpStatus.OK)
            .json(new CustomResponse_1.CustomResponse(200, 'success', listOfProteins));
    }
    async addNewIngredient(res, newProtein) {
        const registeredNewProtein = await this.mealService.addNewProtein(newProtein);
        return res
            .status(common_1.HttpStatus.OK)
            .json(new CustomResponse_1.CustomResponse(200, 'success', registeredNewProtein));
    }
    async addNewBroth(res, newBroth) {
        const registeredNewBroth = await this.mealService.addNewBroth(newBroth);
        return res
            .status(common_1.HttpStatus.OK)
            .json(new CustomResponse_1.CustomResponse(200, 'success', registeredNewBroth));
    }
};
exports.MealsController = MealsController;
__decorate([
    (0, common_1.Get)('/broth'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Ingredient_dto_1.IngredientDTO]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "getListOfBroths", null);
__decorate([
    (0, common_1.Get)('/protein'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Ingredient_dto_1.IngredientDTO]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "getListOfProteins", null);
__decorate([
    (0, common_1.Post)('/addNewProtein'),
    (0, common_1.UsePipes)(protein_dto_pipe_1.ProteinDtoPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Ingredient_dto_1.IngredientDTO]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "addNewIngredient", null);
__decorate([
    (0, common_1.Post)('/addNewBroth'),
    (0, common_1.UsePipes)(broth_dto_pipe_1.BrothDtoPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Ingredient_dto_1.IngredientDTO]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "addNewBroth", null);
exports.MealsController = MealsController = __decorate([
    (0, common_1.Controller)('meals'),
    (0, common_1.UseGuards)(x_api_middleware_1.ApiKeyGuard),
    __metadata("design:paramtypes", [meals_service_1.MealsService])
], MealsController);
//# sourceMappingURL=meals.controller.js.map