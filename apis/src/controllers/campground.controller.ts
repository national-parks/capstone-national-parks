import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Campground} from "../../utils/interfaces/campground";
import {selectCampgroundByCampgroundId} from "../../utils/campground/selectCampgroundByCampgroundId"



export async function getCampgroundByCampgroundId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {campgroundId} = request.params
        const data = await selectCampgroundByCampgroundId(campgroundId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

