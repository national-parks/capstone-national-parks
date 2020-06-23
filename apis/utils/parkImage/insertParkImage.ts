import {ParkImage} from "../interfaces/parkImage";
import {connect} from "../../src/database";

export async function insertParkImage(parkImages:ParkImage[]) {
    try {
        // console.log("parkImages 0", parkImages[0])
        const mySqlConnection = await connect()

        const mySqlQuery = "INSERT INTO parkImage(parkImageId, parkImageParkId, parkImageCaption, parkImageUrl) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:parkImageParkId), :parkImageCaption, :parkImageUrl)";

        for (let parkImage of parkImages){
            // console.log("parkImage", parkImage)
            const [rows, misc] = await mySqlConnection.execute(mySqlQuery, parkImage)
        }

        return "ParkImage created successfully"
    } catch (error) {
        console.log(error)
    }
}