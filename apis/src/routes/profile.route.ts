import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {
    getProfileByProfileId,
    getProfileByProfileEmail,
    getProfileByProfileActivationToken,
    postProfileController, putProfileController
} from "../controllers/profile.controller";

export const profileRoute = Router()

profileRoute.route('/:profileId')
    .get(getProfileByProfileId)
    .post(postProfileController)
    .put(putProfileController)

profileRoute.route('/:profileEmail')
    .get(getProfileByProfileEmail)

profileRoute.route('/activate/:activationToken')
    .get(getProfileByProfileActivationToken)