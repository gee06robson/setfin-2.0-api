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
exports.UpdateDocumentService = void 0;
var Prisma_1 = __importDefault(require("../../Prisma"));
var ultils_1 = require("../../Utils/ultils");
var date_fns_1 = require("date-fns");
var UpdateDocumentService = /** @class */ (function () {
    function UpdateDocumentService() {
    }
    UpdateDocumentService.prototype.execute = function (_a) {
        var id = _a.id, number = _a.number, emission = _a.emission, due_date = _a.due_date, value = _a.value, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var checkDocument, document;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        emission = (0, ultils_1.HandleDate)(emission);
                        if ((0, date_fns_1.compareAsc)((0, date_fns_1.parseISO)(emission), new Date()) === 1) {
                            throw new Error("a data de emissão não pode ser posterior à data atual");
                        }
                        if (due_date) {
                            due_date = (0, ultils_1.HandleDate)(due_date);
                            if ((0, date_fns_1.compareDesc)((0, date_fns_1.parseISO)(emission), (0, date_fns_1.parseISO)(due_date)) !== 1) {
                                throw new Error("a data de vencimento não pode ser inferior ou igual a data de emissão");
                            }
                        }
                        return [4 /*yield*/, Prisma_1.default.document.findUnique({
                                where: {
                                    id: id
                                },
                                include: {
                                    creditor: {
                                        select: {
                                            id: true,
                                        }
                                    }
                                }
                            })];
                    case 1:
                        checkDocument = _b.sent();
                        if (!checkDocument) {
                            throw new Error("documento não existe");
                        }
                        return [4 /*yield*/, Prisma_1.default.document.update({
                                where: {
                                    id: checkDocument.id
                                },
                                data: {
                                    number: number,
                                    emission: emission,
                                    due_date: due_date,
                                    value: value,
                                    status: status
                                }
                            })];
                    case 2:
                        document = _b.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    };
    return UpdateDocumentService;
}());
exports.UpdateDocumentService = UpdateDocumentService;
