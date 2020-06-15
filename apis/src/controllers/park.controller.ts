import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {selectParkByParkId} from "../../utils/park/selectParkByParkId";
import {selectParkByParkDescription} from "../../utils/park/seletctParkByParkDescription";
import {selectParkByParkFullName} from "../../utils/park/selectParkByParkFullName";


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


export async function getParkByParkDescription(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkId} = request.params
        const data = await selectParkByParkDescription(parkId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getParkByParkFullName(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkId} = request.params
        const data = await selectParkByParkFullName(parkId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}