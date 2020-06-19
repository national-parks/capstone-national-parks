import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByProfileId(profileId : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(profileId), profileDisplayName, profileEmail FROM profile WHERE profileId = (:profileId)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileId});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectProfileByProfileId("id");