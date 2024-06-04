"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProteinFactory = void 0;
const protein_entity_1 = require("../../../core/data/entities/proteinEntity/protein.entity");
const common_1 = require("@nestjs/common");
let ProteinFactory = class ProteinFactory {
    create(newIngredient) {
        const protein = new protein_entity_1.ProteinEntity();
        protein.type = newIngredient.type;
        protein.imageInactive = newIngredient.imageInactive;
        protein.imageActive = newIngredient.imageActive;
        protein.name = newIngredient.name;
        protein.description = newIngredient.description;
        protein.price = newIngredient.price;
        return protein;
    }
};
exports.ProteinFactory = ProteinFactory;
exports.ProteinFactory = ProteinFactory = __decorate([
    (0, common_1.Injectable)()
], ProteinFactory);
//# sourceMappingURL=protein.factory.js.map