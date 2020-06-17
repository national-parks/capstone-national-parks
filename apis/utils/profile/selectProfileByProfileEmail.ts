import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByProfileEmail(profileEmail : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(profileId), profileDisplayName, profileEmail FROM profile WHERE profileEmail = (:profileEmail)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileEmail});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectProfileByProfileEmail("email");