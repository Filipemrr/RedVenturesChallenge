"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProteinDtoPipe = void 0;
const common_1 = require("@nestjs/common");
class ProteinDtoPipe {
    transform(value, metadata) {
        if (!value.imageInactive ||
            !value.imageActive ||
            !value.name ||
            !value.description ||
            !value.price ||
            !value.type) {
            throw new common_1.BadRequestException('Itens obrigatórios não encontrados');
        }
        if (typeof value.imageActive !== 'string' || typeof value.imageActive !== 'string' || typeof value.name !== 'string' || typeof value.description !== 'string' || typeof value.price !== 'number' || (value.type.toLowerCase() !== 'protein' && value.type.toLowerCase() !== 'proteina')) {
            throw new common_1.BadRequestException('Dados de cadastro de proteina invalido');
        }
        return value;
    }
}
exports.ProteinDtoPipe = ProteinDtoPipe;
//# sourceMappingURL=protein.dto.pipe.js.map