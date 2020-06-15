import {Router} from "express";
import {postParkStatus, putParkStatus} from "../controllers/parkStatus.controller";

export const parkStatusRoutes = Router()

parkStatusRoutes.route("/")
    .post(postParkStatus)
    .put(putParkStatus)