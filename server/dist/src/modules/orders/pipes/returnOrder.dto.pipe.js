"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnOrderDtoPipe = void 0;
const common_1 = require("@nestjs/common");
class ReturnOrderDtoPipe {
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
exports.ReturnOrderDtoPipe = ReturnOrderDtoPipe;
//# sourceMappingURL=returnOrder.dto.pipe.js.map