"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
// Initializations
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/primes', router_1.default);
// Starting the server
exports.server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
// Exports
exports.default = app;
