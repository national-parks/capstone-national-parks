import {Router} from "express";
import {postParkImage} from "../controllers/parkImage.controller";

export const ParkImageRoute = Router()

ParkImageRoute.route("/")
    .post(postParkImage)