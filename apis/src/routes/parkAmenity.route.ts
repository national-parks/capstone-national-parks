import {Router} from "express";
import {getParkByParkAmenityAmenityId, getParkByParkAmenityId} from "../controllers/parkAmenity.controller";


export const ParkAmenityRoute = Router()

ParkAmenityRoute.route("/parkAmenityId/:parkAmenityId")
    .get(getParkByParkAmenityId)

ParkAmenityRoute.route("/parkAmenityAmenityId/:parkAmenityAmenityId")
    .get(getParkByParkAmenityAmenityId)