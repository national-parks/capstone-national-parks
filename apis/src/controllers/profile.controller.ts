import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Profile} from "../../utils/interfaces/profile";
import {selectProfileByProfileActivationToken} from "../../utils/profile/selectProfileByProfileActivationToken";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";


export async function getProfileByProfileActivationToken(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {activationToken} = request.params
        const data = await selectProfileByProfileActivationToken(activationToken)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getProfileByProfileId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {ProfileId} = request.params
        const data = await selectProfileByProfileId(ProfileId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}