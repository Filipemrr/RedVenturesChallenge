"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrothDtoPipe = void 0;
const common_1 = require("@nestjs/common");
class BrothDtoPipe {
    transform(value, metadata) {
        if (!value.imageInactive ||
            !value.imageActive ||
            !value.name ||
            !value.description ||
            !value.price) {
            throw new common_1.BadRequestException('Itens obrigatórios não encontrados');
        }
        if (typeof value.imageActive !== 'string' || typeof value.imageActive !== 'string' || typeof value.name !== 'string' || typeof value.description !== 'string' || typeof value.price !== 'number' || (value.type.toLowerCase() !== 'broth' && value.type.toLowerCase() !== 'caldo')) {
            throw new common_1.BadRequestException('Dados de cadastro de caldo invalido');
        }
        return value;
    }
}
exports.BrothDtoPipe = BrothDtoPipe;
//# sourceMappingURL=broth.dto.pipe.js.map