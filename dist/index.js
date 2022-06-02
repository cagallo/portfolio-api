"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3002;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('This is a test web page!');
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`The application is listening on port ${port}!`);
});
//# sourceMappingURL=index.js.map