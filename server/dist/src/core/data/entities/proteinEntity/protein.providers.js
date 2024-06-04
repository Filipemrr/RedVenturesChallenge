"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proteinEntityProvider = void 0;
const protein_entity_1 = require("./protein.entity");
exports.proteinEntityProvider = [
    {
        provide: 'PROTEIN_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(protein_entity_1.ProteinEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=protein.providers.js.map