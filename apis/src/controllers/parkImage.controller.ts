import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {ParkImage} from "../../utils/interfaces/parkImage";
import {selectParkImageByParkImageParkId} from "../../utils/parkImage/selectParkImageByParkImageParkId";
import {selectParkImageByParkImageId} from "../../utils/parkImage/selectParkImageByParkImageId";
import {insertParkImage} from "../../utils/parkImage/insertParkImage";
import {selectAllParkImages} from "../../utils/parkImage/selectAllParkImages";
import {selectFiveRandomParkImages} from "../../utils/parkImage/selectFiveRandomParkImages";


export async function getParkImagesByParkImageParkId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkImageParkId} = request.params
        const result = await selectParkImageByParkImageParkId(parkImageParkId)
        return response.json({status: 200, data: result, message: null})
    } catch (error) {
        console.log(error)
    }
}


export async function getParkImagesByParkImageId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkImageId} = request.params
        const result = await selectParkImageByParkImageId(parkImageId)
        return response.json({status: 200, data: result, message: null})
    } catch (error) {
        console.log(error)
    }
}

export async function getAllParkImages(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const result = await selectAllParkImages()
        return response.json({status: 200, data: result, message: null})
    } catch (error) {
        console.log(error)
    }
}

export async function getFiveRandomParkImages(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const result = await selectFiveRandomParkImages()
        return response.json({status: 200, data: result, message: null})
    } catch (error) {
        console.log(error)
    }
}