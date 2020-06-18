import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function insertProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO profile(profileId, profileActivationToken, profileAvatar, profileDisplayName, profileEmail, profileHash) VALUES(UUID_TO_BIN(UUID()), :profileActivationToken, :profileAvatar, :profileDisplayName, :profileEmail, :profileHash)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, profile)
        return "Profile created successfully"
    } catch (error) {
        console.log(error)
    }
}