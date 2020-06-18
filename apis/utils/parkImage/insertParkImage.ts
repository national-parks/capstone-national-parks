import {ParkImage} from "../interfaces/parkImage";
import {connect} from "../../src/database";

export async function insertParkImage(parkImage:ParkImage) {
    try {
        const mySqlConnection = await connect()

        const mySqlQuery = "INSERT INTO parkImage(parkImageId, parkImageParkId, parkImageCaption, parkImageUrl) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:parkImageParkId), :parkImageCaption, :parkImageUrl)";

        const [rows, misc] = await mySqlConnection.execute(mySqlQuery, parkImage)
        console.log(misc)
        return "ParkImage created successfully"
    } catch (error) {
        console.log(error)
    }
}