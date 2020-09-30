"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
exports.lambdaHandler = async (event) => {
    const queries = JSON.stringify(event.body);
    return {
        statusCode: 200,
        body: `Queries: ${queries}`
    };
};
//# sourceMappingURL=app.js.map