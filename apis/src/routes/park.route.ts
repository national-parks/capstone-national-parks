import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getParkByParkDescription, getParkByParkFullName, getParkByParkId} from "../controllers/park.controller";


export const parkRoute = Router()

parkRoute.route('/:parkId')
    .get(getParkByParkId)

parkRoute.route('/:parkId')
    .get(getParkByParkDescription)

parkRoute.route('/:parkId')
    .get(getParkByParkFullName)