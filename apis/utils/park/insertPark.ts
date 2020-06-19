import {Park} from "../interfaces/park";
import {connect} from "../../src/database";


export async function insertPark(park: Park) {
    try {

        const mySqlConnection = await connect();

        const mySqlQuery = "INSERT INTO park(parkId, parkContact, parkDescription, parkFullName, parkState, parkOperatingHours) VALUES(UUID_TO_BIN(:parkId),:parkContact, :parkDescription, :parkFullName, :parkState, :parkOperatingHours)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, park)
        return "park created successfully"

    } catch(error) {
        console.log(error)
    }
}