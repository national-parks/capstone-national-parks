import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkDescription(ParkDescription : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(parkDescription), parkID, parkContact, parkFullName, parkState, parkOperatingHours FROM park WHERE parkDescription = (:parkDescription)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {ParkDescription});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}
