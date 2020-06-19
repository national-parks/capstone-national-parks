import {Campground} from "../interfaces/Campground";
import {connect} from "../../src/database";

export async function insertCampground(campground: Campground) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO campground(campgroundId, campgroundParkId, campgroundAccessibility, campgroundName) VALUES(UUID_TO_BIN(UUID()), :campgroundParkId, :campgroundAccessibility, :campgroundName)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, campground)
        return "Campground inserted successfully"
    } catch (error) {
        console.log(error)
    }
}