import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkFullName(ParkFullName : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(parkFullName), parkId, parkContact, parkDescription, parkState, parkOperatingHours FROM park WHERE parkFullName = (:parkFullName)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {ParkFullName});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}
