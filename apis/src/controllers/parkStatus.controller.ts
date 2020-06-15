import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {insertParkStatus} from "../../utils/parkStatus/insertParkStatus";

export async function postParkStatus(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await insertParkStatus()
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}