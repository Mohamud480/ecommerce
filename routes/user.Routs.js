import Express  from "express";
import { login, register } from "../controllers/userControllers.js";

const router =Express.Router()
router.route('/').post(register)
router.route('/').post(login)
export default router