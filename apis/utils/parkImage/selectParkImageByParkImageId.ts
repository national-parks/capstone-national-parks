import {connect} from "../../src/database";

export async function selectParkImageByParkImageId(parkImageId : string) {
    try {
        const mySqlConnection = await connect()

        const query = "SELECT BIN_TO_UUID(parkImageId) AS parkImageId, BIN_TO_UUID(parkImageParkId) AS parkImageParkId, parkImageCaption, parkImageUrl FROM parkImage WHERE parkImageId = UUID_TO_BIN(:parkImageId)"

        const [rows] = await mySqlConnection.execute(query, {parkImageId})

        return rows
    } catch (error) {
        console.error(error)
        return undefined
    }
}