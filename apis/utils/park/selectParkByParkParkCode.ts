import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

export async function selectParkByParkParkCode(parkCode : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT  BIN_TO_UUID(parkId) AS parkId, parkContact, parkDescription, parkFullName, parkOperatingHours, parkParkCode, parkState FROM park WHERE parkCode = :parkCode';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {parkCode});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectParkByParkParkCode("Park Code")