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
exports.CreateDocumentServcice = void 0;
var date_fns_1 = require("date-fns");
var compareDesc_1 = __importDefault(require("date-fns/compareDesc"));
var Prisma_1 = __importDefault(require("../../Prisma"));
var ultils_1 = require("../../Utils/ultils");
var CreateDocumentServcice = /** @class */ (function () {
    function CreateDocumentServcice() {
    }
    CreateDocumentServcice.prototype.execute = function (_a) {
        var code = _a.code, name = _a.name, number = _a.number, emission = _a.emission, due_date = _a.due_date, value = _a.value, _b = _a.status, status = _b === void 0 ? false : _b, unit_id = _a.unit_id, user_id = _a.user_id;
        return __awaiter(this, void 0, void 0, function () {
            var checkCreditor, checkUser, checkUnity, checkDocument, newDocument;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (value <= 0) {
                            throw new Error("o valor do documento não pode ser igual ou menor que zero");
                        }
                        if (code.length !== 6 && code.length !== 11 && code.length !== 14) {
                            throw new Error("o código do credor deve conter 6, 11 ou 14 caracteres");
                        }
                        if (unit_id === undefined) {
                            throw new Error("usuário não vinculado a uma unidade");
                        }
                        emission = (0, ultils_1.HandleDate)(emission);
                        console.log(emission);
                        if ((0, date_fns_1.compareAsc)((0, date_fns_1.parseISO)(emission), new Date()) === 1) {
                            throw new Error("a data de emissão não pode ser posterior à data atual");
                        }
                        console.log(emission);
                        if (due_date) {
                            due_date = (0, ultils_1.HandleDate)(due_date);
                            if ((0, compareDesc_1.default)((0, date_fns_1.parseISO)(emission), (0, date_fns_1.parseISO)(due_date)) !== 1) {
                                throw new Error("a data de vencimento não pode ser inferior ou igual a data de emissão");
                            }
                        }
                        return [4 /*yield*/, Prisma_1.default.creditor.findFirst({
                                where: {
                                    code: code
                                }
                            })];
                    case 1:
                        checkCreditor = _c.sent();
                        if (!!checkCreditor) return [3 /*break*/, 3];
                        return [4 /*yield*/, Prisma_1.default.creditor.create({
                                data: {
                                    code: code,
                                    name: name
                                }
                            })];
                    case 2:
                        checkCreditor = _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, Prisma_1.default.user.findUnique({
                            where: {
                                id: user_id
                            }
                        })];
                    case 4:
                        checkUser = _c.sent();
                        if (!checkUser) {
                            throw new Error("usuário não existe");
                        }
                        return [4 /*yield*/, Prisma_1.default.unity.findUnique({
                                where: {
                                    id: unit_id
                                }
                            })];
                    case 5:
                        checkUnity = _c.sent();
                        if (!checkUnity) {
                            throw new Error("unidade não existe");
                        }
                        if (checkUnity.status === false) {
                            throw new Error("unidade desabilitada");
                        }
                        return [4 /*yield*/, Prisma_1.default.document.findFirst({
                                where: {
                                    number: number,
                                    emission: emission,
                                    value: value,
                                    creditor: {
                                        id: checkCreditor.id
                                    }
                                },
                                include: {
                                    creditor: {
                                        select: {
                                            code: true,
                                            name: true
                                        },
                                    },
                                },
                            })];
                    case 6:
                        checkDocument = _c.sent();
                        if (checkDocument) {
                            throw new Error("documento já existe");
                        }
                        return [4 /*yield*/, Prisma_1.default.document.create({
                                data: {
                                    number: number,
                                    emission: emission,
                                    due_date: due_date,
                                    value: value,
                                    status: status,
                                    creditor_id: checkCreditor.id,
                                },
                                include: {
                                    creditor: {
                                        select: {
                                            code: true,
                                            name: true
                                        },
                                    },
                                },
                            })];
                    case 7:
                        newDocument = _c.sent();
                        return [4 /*yield*/, Prisma_1.default.unityOnDocuments.create({
                                data: {
                                    document_id: newDocument.id,
                                    unit_id: checkUnity.id,
                                    assigned_by: user_id
                                }
                            })];
                    case 8:
                        _c.sent();
                        return [2 /*return*/, newDocument];
                }
            });
        });
    };
    return CreateDocumentServcice;
}());
exports.CreateDocumentServcice = CreateDocumentServcice;
