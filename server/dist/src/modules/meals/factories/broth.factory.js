"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrothFactory = void 0;
const broth_entity_1 = require("../../../core/data/entities/brothEntity/broth.entity");
const common_1 = require("@nestjs/common");
let BrothFactory = class BrothFactory {
    create(newIngredient) {
        const broth = new broth_entity_1.BrothEntity();
        broth.type = newIngredient.type;
        broth.imageInactive = newIngredient.imageInactive;
        broth.imageActive = newIngredient.imageActive;
        broth.name = newIngredient.name;
        broth.description = newIngredient.description;
        broth.price = newIngredient.price;
        return broth;
    }
};
exports.BrothFactory = BrothFactory;
exports.BrothFactory = BrothFactory = __decorate([
    (0, common_1.Injectable)()
], BrothFactory);
//# sourceMappingURL=broth.factory.js.map