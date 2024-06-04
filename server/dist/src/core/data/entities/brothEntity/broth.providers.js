"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brothEntityProviders = void 0;
const broth_entity_1 = require("./broth.entity");
exports.brothEntityProviders = [
    {
        provide: 'BROTH_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(broth_entity_1.BrothEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=broth.providers.js.map