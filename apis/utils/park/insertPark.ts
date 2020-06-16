import {park} from "../interfaces/park";
import {connect} from "../../src/database";


export async function insertPark(Park: park) {
    try {

        const mySqlConnection = await connect();

        const mySqlQuery = "INSERT INTO park(parkId, parkContact, parkDescription, parkFullName, parkState, parkOperatingHours) VALUES(UUID_TO_BIN(UUID(:parkId)),:parkContact, :parkDescription, :parkFullName, :parkState, :parkOperatingHours)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, Park)
        return "park created successfully"

    } catch(error) {
        console.log(error)
    }
}