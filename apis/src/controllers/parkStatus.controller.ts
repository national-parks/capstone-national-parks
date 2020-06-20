import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {ParkStatus} from "../../utils/interfaces/parkStatus"
import {insertParkStatus} from "../../utils/parkStatus/insertParkStatus";
import {updateParkStatus} from "../../utils/parkStatus/updateParkStatus";

export async function postParkStatus(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkStatusParkStatus, parkStatusParkId} = request.body
        const profile = request.session?.profile
        console.log(request.session)
        const parkStatusProfileId = profile.profileId
        const parkStatus : ParkStatus = {parkStatusParkId, parkStatusProfileId, parkStatusParkStatus, parkStatusDate: null}
        const data = await insertParkStatus(parkStatus)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function putParkStatus(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkStatusParkStatus, parkStatusDate} = request.body
        const {parkStatusProfileId, parkStatusParkId} = request.params;
        const parkStatus : ParkStatus = {parkStatusProfileId, parkStatusParkId, parkStatusParkStatus, parkStatusDate}
        const result = await updateParkStatus(parkStatus)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}