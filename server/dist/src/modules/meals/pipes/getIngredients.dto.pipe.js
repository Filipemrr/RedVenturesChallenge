"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIngredientsDtoPipe = void 0;
const common_1 = require("@nestjs/common");
class GetIngredientsDtoPipe {
    transform(value, metadata) {
        if (!value.id) {
            throw new common_1.BadRequestException('Itens obrigatórios não encontrados');
        }
        if (typeof value.id !== 'number') {
            throw new common_1.BadRequestException('Este ID de ingrediente nao existe');
        }
        return value;
    }
}
exports.GetIngredientsDtoPipe = GetIngredientsDtoPipe;
//# sourceMappingURL=getIngredients.dto.pipe.js.map