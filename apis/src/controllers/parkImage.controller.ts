import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {ParkImage} from "../../utils/interfaces/parkImage";
import {insertParkImage} from "../../utils/interfaces/parkImage/insertParkImage";

export async function postParkImage(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {parkImageParkId, parkImageCaption, parkImageUrl} = request.body
        const parkImage: ParkImage = {parkImageId: null, parkImageParkId, parkImageCaption, parkImageUrl}
        const result = await insertParkImage(parkImage)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}

