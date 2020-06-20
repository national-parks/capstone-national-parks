import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByProfileEmail(profileEmail : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) AS profileId, profileActivationToken, profileAvatar, profileDisplayName, profileEmail, profileHash FROM profile WHERE profileEmail = (:profileEmail)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileEmail});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectProfileByProfileEmail("email");