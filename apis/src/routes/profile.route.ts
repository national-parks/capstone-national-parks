import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getProfileByProfileActivationToken} from "../controllers/profile.controller";
import {getProfileByProfileId} from "../controllers/profile.controller";

export const profileRoute = Router()

profileRoute.route('/:profileId')
    .get(getProfileByProfileId)

profileRoute.route('/activate/:activationToken')
    .get(getProfileByProfileActivationToken)