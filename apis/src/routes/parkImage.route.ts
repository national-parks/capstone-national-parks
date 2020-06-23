import {Router} from "express";
import {getParkImagesByParkImageParkId} from "../controllers/parkImage.controller";
import {getParkImagesByParkImageId} from "../controllers/parkImage.controller";

export const ParkImageRoute = Router()

ParkImageRoute.route("/parkImageParkId/:parkImageParkId")
    .get(getParkImagesByParkImageParkId)

ParkImageRoute.route("/:parkImageId")
    .get(getParkImagesByParkImageId)