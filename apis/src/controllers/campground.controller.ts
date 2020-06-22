import {NextFunction, Request, Response} from "express";
// import {Status} from "../../utils/interfaces/status";
import {selectCampgroundByCampgroundId} from "../../utils/campground/selectCampgroundByCampgroundId"
import {selectCampgroundByCampgroundParkId} from "../../utils/campground/selectCampgroundByCampgroundParkId";


export async function getCampgroundByCampgroundId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {campgroundId} = request.params
        const data = await selectCampgroundByCampgroundId(campgroundId)
        console.log(data)
        const status: any = {status: 200, data:null, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getCampgroundByCampgroundParkId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {campgroundParkId} = request.params
        const data = await selectCampgroundByCampgroundParkId(campgroundParkId)
        console.log(data)
        const status: any = {status: 200, data:null, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}