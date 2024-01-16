import {Router} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateAccountController } from './controllers/account/CreateAccountController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { CreateTransactionController } from './controllers/transaction/CreateTransactionController';
import { detailUserController } from './controllers/user/UserDetailController';
import { GetAllTransactionController } from './controllers/transaction/GetAllTransactionController';
import { GetCategoryController } from './controllers/category/GetCategoriesController';
import { GetAccountDetailsController } from './controllers/account/GetAccountDetailsController';
import {GetAllTransactionByUserIDController} from './controllers/transaction/GetAllTransactionByUserIDController'



const router = Router();

//Rotas USER
router.post("/createUser", new CreateUserController().handle)
router.post("/authUser", new AuthUserController().handle)
router.get('/userDetail', isAuthenticated, new detailUserController().handle)

//Rotas Account
router.get("/accountDetails", isAuthenticated, new GetAccountDetailsController().handle)
router.post("/createAccount", isAuthenticated, new CreateAccountController().handle)

//Rotas Category
router.post("/createCategory", isAuthenticated, new CreateCategoryController().handle)
router.get("/allCategories", isAuthenticated, new GetCategoryController().handle)

//Rotas Transaction
router.get('/allTransactions', isAuthenticated, new GetAllTransactionController().handle)
router.post("/createTransaction", isAuthenticated, new CreateTransactionController().handle)
router.get("/transactionsUser", isAuthenticated, new GetAllTransactionByUserIDController().handle)

export {router}
