import {connect} from "../../src/database";

export async function selectFiveRandomParkImages() {
    try {
        const mySqlConnection = await connect()

        const query = "SELECT BIN_TO_UUID(parkImageId) AS parkImageId, BIN_TO_UUID(parkImageParkId) AS parkImageParkId, parkImageCaption, parkImageUrl FROM parkImage INNER JOIN park ORDER BY RAND() LIMIT 5"

        const [rows] = await mySqlConnection.execute(query)

        return rows
    } catch (error) {
        console.error(error)
        return undefined
    }
}