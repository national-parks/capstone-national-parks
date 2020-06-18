import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectAllParks(){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkId) AS parkId, parkDescription, parkContact, parkFullName, parkState, parkOperatingHours FROM park ';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, );

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}
