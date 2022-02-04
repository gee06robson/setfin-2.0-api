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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTaxesDocumentService = void 0;
var Prisma_1 = __importDefault(require("../../Prisma"));
var AddTaxesDocumentService = /** @class */ (function () {
    function AddTaxesDocumentService() {
    }
    AddTaxesDocumentService.prototype.execute = function (_a) {
        var document_id = _a.document_id, code = _a.code, calculation_basis = _a.calculation_basis, p_a = _a.p_a, correction = _a.correction;
        return __awaiter(this, void 0, void 0, function () {
            var checkDocument, checkTaxe, checkTaxesOnDocument, newTaxeDocument;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (Number(p_a) > 100 || Number(p_a) <= 0) {
                            throw new Error("percentual não pode ser maior que 100% ou menor que 0%");
                        }
                        if (code.length > 4 || code.length < 4) {
                            throw new Error("o código deve conter 4 caractres. exemplo - 9999");
                        }
                        return [4 /*yield*/, Prisma_1.default.document.findUnique({
                                where: {
                                    id: document_id
                                }
                            })];
                    case 1:
                        checkDocument = _b.sent();
                        if (!checkDocument) {
                            throw new Error("documento não existe");
                        }
                        if (Number(calculation_basis) > Number(checkDocument.value) || Number(calculation_basis) <= 0) {
                            throw new Error("o valor da base cálculo não pode ser maio que o valor do documento ou menor que zero");
                        }
                        return [4 /*yield*/, Prisma_1.default.taxe.findFirst({
                                where: {
                                    code: code,
                                    p_a: p_a
                                }
                            })];
                    case 2:
                        checkTaxe = _b.sent();
                        if (!!checkTaxe) return [3 /*break*/, 4];
                        return [4 /*yield*/, Prisma_1.default.taxe.create({
                                data: {
                                    code: code,
                                    p_a: p_a
                                }
                            })];
                    case 3:
                        checkTaxe = _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, Prisma_1.default.taxesDocuments.findFirst({
                            where: {
                                taxe_id: checkTaxe.id,
                                document_id: checkDocument.id
                            }
                        })];
                    case 5:
                        checkTaxesOnDocument = _b.sent();
                        if (checkTaxesOnDocument) {
                            throw new Error("você já aplicou essa alíquota");
                        }
                        return [4 /*yield*/, Prisma_1.default.taxesDocuments.create({
                                data: {
                                    document_id: checkDocument.id,
                                    taxe_id: checkTaxe.id,
                                    p_a: p_a,
                                    code: code,
                                    calculation_basis: calculation_basis,
                                    correction: correction,
                                    amount: (((p_a / 100) * calculation_basis))
                                }
                            })];
                    case 6:
                        newTaxeDocument = _b.sent();
                        return [2 /*return*/, newTaxeDocument];
                }
            });
        });
    };
    return AddTaxesDocumentService;
}());
exports.AddTaxesDocumentService = AddTaxesDocumentService;
