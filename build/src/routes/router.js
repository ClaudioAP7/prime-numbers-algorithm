"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generatePrime_1 = require("../controllers/generatePrime");
const validate_1 = require("../middleware/validate");
const router = (0, express_1.Router)();
router.get('/:number', validate_1.validateInput, generatePrime_1.primes.getPrimes);
exports.default = router;
