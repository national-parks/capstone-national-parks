import {Router} from "express";
import {getParkImagesByParkImageParkId, postParkImage} from "../controllers/parkImage.controller";
import {getParkImagesByParkImageId} from "../controllers/parkImage.controller";

export const ParkImageRoute = Router()

ParkImageRoute.route("/parkImageParkId/:parkImageParkId")
    .get(getParkImagesByParkImageParkId)

ParkImageRoute.route("/parkImageId/:parkImageId")
    .get(getParkImagesByParkImageId)