import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getCampgroundByCampgroundId} from "../controllers/campground.controller";


export const campgroundRoute = Router()

campgroundRoute.route('/:campgroundId')
    .get(getCampgroundByCampgroundId)