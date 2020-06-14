import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {ParkImage} from "../../utils/interfaces/parkImage";
import {selectParkImageByParkImageParkId} from "../../utils/parkImage/selectParkImageByParkImageParkId";
import {selectParkImageByParkImageId} from "../../utils/parkImage/selectParkImageByParkImageId";
import {insertParkImage} from "../../utils/parkImage/insertParkImage";
import {ParkImageRoute} from "../routes/parkImage.route";


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


export async function postParkImageId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkImageAttribution, parkImageContent, parkImageSubmitter} = request.body
        const misquote: ParkImage = {parkImageId: null, parkImageParkId, parkImageUrl, parkImageCaption}
        const result = await insertParkImage(postParkImageId)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}
