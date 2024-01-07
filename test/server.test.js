"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const server_1 = require("../src/server");
(0, vitest_1.describe)('Server', () => {
    (0, vitest_1.it)('works', () => {
        const hostname = '127.0.0.1';
        const port = 3000;
        return new Promise((resolve, reject) => {
            server_1.server.listen(port, hostname, () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    console.log('we listen');
                    const res = yield fetch(`http://${hostname}:${port}`);
                    const text = yield res.text();
                    (0, vitest_1.expect)(res.status).toEqual(200);
                    (0, vitest_1.expect)(text).toEqual('Hello World\n');
                    console.log('we resolve');
                    resolve(true);
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    });
});
