import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkId(parkId : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT  BIN_TO_UUID(parkId) AS parkId, parkContact, parkDescription, parkFullName, parkState, parkOperatingHours FROM park WHERE parkId = UUID_TO_BIN (:parkId)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {parkId});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}