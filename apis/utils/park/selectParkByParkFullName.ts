import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkFullName(parkFullName : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkId) AS parkId, parkFullName, parkContact, parkDescription, parkState, parkOperatingHours FROM park WHERE parkFullName = (:parkFullName)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {parkFullName});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectParkByParkFullName("Fullname")