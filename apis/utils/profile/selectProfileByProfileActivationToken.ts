import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByProfileActivationToken(profileActivationToken : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(profileId), profileDisplayName, profileEmail FROM profile WHERE profileActivationToken = (:profileActivationToken)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileActivationToken});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectProfileByProfileActivationToken("characters");