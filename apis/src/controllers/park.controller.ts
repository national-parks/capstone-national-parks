import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {park} from "../../utils/interfaces/park";
import {selectParkByParkId} from "../../utils/park/selectParkByParkId";
import {selectParkByParkDescription} from "../../utils/park/selectParkByParkDescription";
import {selectParkByParkFullName} from "../../utils/park/selectParkByParkFullName";
import {selectAllParks} from "../../utils/park/selectAllParks";


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
        const {parkDescription} = request.params
        const data = await selectParkByParkDescription(parkDescription)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getParkByParkFullName(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkFullName} = request.params
        const data = await selectParkByParkFullName(parkFullName)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getAllParks(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllParks()
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
