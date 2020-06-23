import {NextFunction, Request, Response} from "express";
import {selectParkByParkAmenityId} from "../../utils/interfaces/parkAmenity/selectParkByParkAmenityId";
import {selectParkByParkAmenityAmenityId} from "../../utils/interfaces/parkAmenity/selectParkByParkAmenityAmenityId";
import {Status} from "../../utils/interfaces/status";


export async function getParkByParkAmenityId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkAmenityId} = request.params;
        const data = await selectParkByParkAmenityId(parkAmenityId);
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getParkByParkAmenityAmenityId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkAmenityId} = request.params;
        const data = await selectParkByParkAmenityAmenityId(parkAmenityId);
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}