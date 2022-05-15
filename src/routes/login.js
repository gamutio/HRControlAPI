import { Router } from 'express';
const router = Router();

import * as sign from "../controllers/authController";
import {verifySignup} from '../middlewares'

router.post('/signin', sign.signin);

router.post('/signup', verifySignup.checkMailUser, sign.signup);



module.exports = router;