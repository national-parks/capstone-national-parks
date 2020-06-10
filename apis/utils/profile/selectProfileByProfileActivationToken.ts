import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByProfileActivationToken(profileActivationToken : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(profileId), profileDisplayName, profileEmail FROM profile WHERE profileActivationToken = (:profileActivationToken)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileActivationToken});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectProfileByProfileActivationToken("characters");