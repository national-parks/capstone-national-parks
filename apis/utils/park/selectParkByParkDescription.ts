import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkDescription(parkDescription : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkId) AS parkId, parkDescription, parkContact, parkFullName, parkState, parkOperatingHours FROM park WHERE parkDescription = (:parkDescription)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {parkDescription});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectParkByParkDescription("Description")