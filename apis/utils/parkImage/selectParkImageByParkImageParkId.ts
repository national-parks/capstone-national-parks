import {connect} from "../../src/database";

export async function selectParkImageByParkImageParkId(parkImageParkId : string) {
    try {
        const mySqlConnection = await connect()

        const query = "SELECT BIN_TO_UUID(parkImageId) AS parkImageId, BIN_TO_UUID(parkImageParkId) AS parkImageParkId, parkImageCaption, parkImageUrl FROM parkImage WHERE parkImageParkId = UUID_TO_BIN(:parkImageParkId)"

        const [rows] = await mySqlConnection.execute(query, {parkImageParkId})

        return rows
    } catch (error) {
        console.error(error)
        return undefined
    }
}