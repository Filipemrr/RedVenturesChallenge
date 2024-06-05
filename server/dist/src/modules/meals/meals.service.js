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
exports.MealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const protein_entity_1 = require("../../core/data/entities/protein.entity");
const broth_entity_1 = require("../../core/data/entities/broth.entity");
const protein_factory_1 = require("./factories/protein.factory");
const broth_factory_1 = require("./factories/broth.factory");
const typeorm_2 = require("@nestjs/typeorm");
let MealsService = class MealsService {
    constructor(proteinRepository, brothRepository, proteinFactory, brothFactory) {
        this.proteinRepository = proteinRepository;
        this.brothRepository = brothRepository;
        this.proteinFactory = proteinFactory;
        this.brothFactory = brothFactory;
    }
    async addNewProtein(prospectIngredient) {
        const existingProtein = await this.proteinRepository.findOne({ where: { name: prospectIngredient.name } });
        if (existingProtein) {
            return { message: 'Protein already exists' };
        }
        const newProtein = this.proteinFactory.create(prospectIngredient);
        await this.proteinRepository.save(newProtein);
        return { message: 'Protein added successfully' };
    }
    async addNewBroth(prospectIngredient) {
        const existingBroth = await this.brothRepository.findOne({ where: { name: prospectIngredient.name } });
        if (existingBroth) {
            return { message: 'Broth already exists' };
        }
        const newBroth = this.brothFactory.create(prospectIngredient);
        await this.brothRepository.save(newBroth);
        return { message: 'Broth added successfully' };
    }
    async getListOfBroths() {
        let listOfBroths;
        return listOfBroths = await this.brothRepository.find();
    }
    async getListOfProteins() {
        let listOfProteins;
        return listOfProteins = await this.proteinRepository.find();
    }
};
exports.MealsService = MealsService;
exports.MealsService = MealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(protein_entity_1.ProteinEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(broth_entity_1.BrothEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        protein_factory_1.ProteinFactory,
        broth_factory_1.BrothFactory])
], MealsService);
//# sourceMappingURL=meals.service.js.map