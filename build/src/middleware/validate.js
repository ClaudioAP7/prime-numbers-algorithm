"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
const validateInput = (req, res, next) => {
    const inputValue = req.params.number;
    if (+inputValue === parseInt(inputValue, 10)) {
        if (+inputValue >= 2) {
            next();
        }
        else {
            res.status(400).send('Input value must be greater than or equal to 2');
        }
    }
    else {
        res.status(400).send('Invalid input value');
    }
};
exports.validateInput = validateInput;
