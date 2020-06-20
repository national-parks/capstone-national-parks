import {ParkStatus} from "../interfaces/parkStatus";
import {connect} from "../../src/database";

export async function insertParkStatus(parkStatus: ParkStatus) {
    try {
        const mySqlConnection = await connect()
        console.log(parkStatus)
        const mySqlQuery = "INSERT INTO parkStatus(parkStatusParkId, parkStatusProfileId, parkStatusDate, parkStatusParkStatus) VALUES(UUID_TO_BIN(:parkStatusParkId), UUID_TO_BIN(:parkStatusProfileId), NOW(), :parkStatusParkStatus)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, parkStatus)
        return "Park Status created successfully"
    } catch (error) {
        console.log(error)
    }
}