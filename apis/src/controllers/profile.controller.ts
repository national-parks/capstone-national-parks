import {NextFunction, Request, Response} from "express";
import {Profile} from "../../utils/interfaces/profile";
import {selectProfileByProfileActivationToken} from "../../utils/profile/selectProfileByProfileActivationToken";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";
import {insertProfile} from "../../utils/profile/insertProfile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {Status} from "../../utils/interfaces/status";

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

export async function getProfileByProfileEmail(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {email} = request.params
        const data = await selectProfileByProfileEmail(email)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function putProfileController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {profileAvatar, profileDisplayName, profileEmail, profileHash} = request.body
        const {profileId, profileActivationToken} = request.params;
        const profile: Profile= {profileId, profileActivationToken, profileAvatar, profileDisplayName, profileEmail, profileHash}
        const result = await updateProfile(profile)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}