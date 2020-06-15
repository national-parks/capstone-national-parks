import {Router} from "express";
import {postParkStatus} from "../controllers/parkStatus.controller";

export const parkStatusRoutes = Router()

parkStatusRoutes.route("/")
    .post(postParkStatus)