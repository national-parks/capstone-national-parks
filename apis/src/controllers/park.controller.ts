import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Park} from "../../utils/interfaces/park";
import {selectParkByParkId} from "../../utils/park/selectParkByParkId";


export async function getParkByParkId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkId} = request.params
        const data = await selectParkByParkId(parkId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}