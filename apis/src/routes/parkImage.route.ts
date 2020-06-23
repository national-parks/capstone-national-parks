import {Router} from "express";
import {getAllParkImages, getParkImagesByParkImageParkId} from "../controllers/parkImage.controller";
import {getParkImagesByParkImageId} from "../controllers/parkImage.controller";

export const ParkImageRoute = Router()

ParkImageRoute.route("/").get(getAllParkImages)
ParkImageRoute.route("/parkImageParkId/:parkImageParkId")
    .get(getParkImagesByParkImageParkId)

ParkImageRoute.route("/:parkImageId")
    .get(getParkImagesByParkImageId)