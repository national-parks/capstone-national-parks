import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {getParkByParkId} from "../controllers/park.controller";


export const parkRoute = Router()

parkRoute.route('/:parkId')
    .get(getParkByParkId)