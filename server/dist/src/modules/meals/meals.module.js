"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsModule = void 0;
const common_1 = require("@nestjs/common");
const meals_controller_1 = require("./meals.controller");
const meals_service_1 = require("./meals.service");
const protein_factory_1 = require("./factories/protein.factory");
const broth_factory_1 = require("./factories/broth.factory");
const broth_entity_1 = require("../../core/data/entities/broth.entity");
const typeorm_1 = require("@nestjs/typeorm");
const protein_entity_1 = require("../../core/data/entities/protein.entity");
let MealsModule = class MealsModule {
};
exports.MealsModule = MealsModule;
exports.MealsModule = MealsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([broth_entity_1.BrothEntity, protein_entity_1.ProteinEntity])],
        controllers: [meals_controller_1.MealsController],
        providers: [meals_service_1.MealsService, protein_factory_1.ProteinFactory, broth_factory_1.BrothFactory],
        exports: [meals_service_1.MealsService],
    })
], MealsModule);
//# sourceMappingURL=meals.module.js.map