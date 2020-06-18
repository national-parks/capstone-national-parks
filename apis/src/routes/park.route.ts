import {Router} from "express"
import {indexController} from '../controllers/index.controller'
import {
    getAllParks,
    getParkByParkDescription,
    getParkByParkFullName,
    getParkByParkId
} from "../controllers/park.controller";


export const parkRoute = Router()

parkRoute.route('').get(getAllParks)
parkRoute.route('/:parkId')
    .get(getParkByParkId)

parkRoute.route('/parkDescription/:parkDescription')
    .get(getParkByParkDescription)

parkRoute.route('/parkFullName/:parkFullName')
    .get(getParkByParkFullName)