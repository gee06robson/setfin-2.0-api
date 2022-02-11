import { Router } from "express"

import { AuthenticateUserController } from "./Controllers/User/AuthenticateUserController"
import { CreateUnityController } from "./Controllers/Unity/CreateUnityController"
import { ensureAuthenticated } from "./Middlewares/ensureAuthenticated"
import { CreateCreditorController } from "./Controllers/Creditor/CreateCreditorController"
import { ListUnitsController } from "./Controllers/Unity/ListUnitsController"
import { ListUsersController } from "./Controllers/User/ListUsersController"
import { CreateDocumentController } from "./Controllers/Document/CreateDocumentController"
import { ListDocumentsController } from "./Controllers/Document/ListDocumentsController"
import { ProfileUserController } from "./Controllers/User/ProfileUserController"
import { SelectCreditorController } from "./Controllers/Creditor/SelectCreditorController"
import { SelectDocumentController } from "./Controllers/Document/SelectDocumentController"
import { UpdateDocumentController } from "./Controllers/Document/UpdateDocumentController"
import { FilterDocumentsController } from "./Controllers/Document/FilterDocumentsController"
import { CreateTaxesController } from "./Controllers/Taxes/CreateTaxesController"
import { ListTaxesController } from "./Controllers/Taxes/ListTaxesController"
import { AddTaxesDocumentController } from "./Controllers/Taxes/AddTaxesDocumentController"
import { RemoveTaxesDocumentController } from "./Controllers/Taxes/RemoveTaxesDocumentController"
import { DeleteDocumentController } from "./Controllers/Document/DeleteDocumentController"


const router = Router()

router.post("/user", new AuthenticateUserController().handle)
router.get("/users", new ListUsersController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)
router.post("/unity", ensureAuthenticated, new CreateUnityController().handle)
router.get("/units", ensureAuthenticated, new ListUnitsController().handle)
router.post("/creditor", ensureAuthenticated, new CreateCreditorController().handle)
router.post("/select_creditor", ensureAuthenticated, new SelectCreditorController().handle)
router.post("/document", ensureAuthenticated, new CreateDocumentController().handle)
router.post("/documents", ensureAuthenticated, new ListDocumentsController().handle)
router.post("/documents/filter", ensureAuthenticated, new FilterDocumentsController().handle)
router.post("/document/update", ensureAuthenticated, new UpdateDocumentController().handle)
router.get("/select_document/:id", ensureAuthenticated, new SelectDocumentController().handle)
router.post("/taxe", ensureAuthenticated, new CreateTaxesController().handle)
router.post("/document/delete", ensureAuthenticated, new DeleteDocumentController().handle)
router.get("/list/taxes/", ensureAuthenticated, new ListTaxesController().handle)
router.post("/taxes/document/", ensureAuthenticated, new AddTaxesDocumentController().handle)
router.post("/taxe/remove/document", ensureAuthenticated, new RemoveTaxesDocumentController().handle)



export { router }