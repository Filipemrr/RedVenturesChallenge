"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderDtoPipe = void 0;
const common_1 = require("@nestjs/common");
class PostOrderDtoPipe {
    transform(value, metadata) {
        if (!value.brothId ||
            !value.proteinId) {
            throw new common_1.BadRequestException('both brothId and proteinId are required');
        }
        if (typeof value.proteinId !== 'string' || typeof value.brothId !== 'string') {
            throw new common_1.BadRequestException('IDs should be strings');
        }
        return value;
    }
}
exports.PostOrderDtoPipe = PostOrderDtoPipe;
//# sourceMappingURL=postOrder.dto.pipe.js.map