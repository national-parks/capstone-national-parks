import {parkStatus} from "../../utils/interfaces/parkStatus";
import {connect} from "../../src/database";

export async function updateParkStatus(parkStatus: parkStatus) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "UPDATE parkStatus SET parkStatusDate = :parkStatusDate, parkStatusParkStatus = :parkStatusParkStatus WHERE parkStatusParkId = UUID_TO_BIN(:parkStatusParkId) AND parkStatusProfileId = UUID_TO_BIN(:parkStatusProfileId)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, parkStatus)
        return "Park Status Successfully Updated"
    } catch (error) {
        console.log(error)
    }
}