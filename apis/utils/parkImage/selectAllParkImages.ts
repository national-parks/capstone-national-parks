import {connect} from "../../src/database";

export async function selectAllParkImages() {
    try {
        const mySqlConnection = await connect()

        const query = "SELECT BIN_TO_UUID(parkImageId) AS parkImageId, BIN_TO_UUID(parkImageParkId) AS parkImageParkId, parkImageCaption, parkImageUrl FROM parkImage"

        const [rows] = await mySqlConnection.execute(query)

        return rows
    } catch (error) {
        console.error(error)
        return undefined
    }
}