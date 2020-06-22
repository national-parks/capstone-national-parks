import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getCampgroundByCampgroundId, getCampgroundByCampgroundParkId} from "../controllers/campground.controller";


export const campgroundRoute = Router()

campgroundRoute.route('/:campgroundId')
    .get(getCampgroundByCampgroundId)

campgroundRoute.route('/campgroundParkId/:campgroundParkId')
    .get(getCampgroundByCampgroundParkId)