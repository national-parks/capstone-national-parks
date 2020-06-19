import {parkStatus} from "../interfaces/parkStatus";
import {connect} from "../../src/database";

export async function insertParkStatus(parkStatus: parkStatus) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO parkStatus(parkStatusParkId, parkStatusProfileId, parkStatusDate, parkStatusParkStatus) VALUES(UUID_TO_BIN(UUID(parkStatusParkId)), UUID_TO_BIN(UUID(parkStatusProfileId)), :parkStatusDate, :parkStatusParkStatus)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, parkStatus)
        return "Park Status created successfully"
    } catch (error) {
        console.log(error)
    }
}