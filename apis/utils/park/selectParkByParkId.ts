import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkId(ParkId : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT HEX(parkId), parkContact, parkDescription, parkFullName, parkState, parkOperatingHours FROM park WHERE parkId = (:parkId)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {ParkId});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectParkByParkId("Id");