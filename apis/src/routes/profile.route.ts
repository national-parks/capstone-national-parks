import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getProfileByProfileActivationToken} from "../controllers/profile.controller";

export const profileRoute = Router()

profileRoute.route('/activate/:activationToken')
    .get(getProfileByProfileActivationToken)