import {ParkAmenity} from "../parkAmenity"
import {connect} from "../../src/database";

export async function selectParkByParkAmenity(parkAmenity: string) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkAmenity) as parkAmenityId, parkAmenityAmenityId FROM parkAmenity WHERE parkAmenityId = UUID_TO_BIN(:parkAmenityId)'

        const [rows] = await mysqlConnection.execute(mySqlQuery, {parkAmenity})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}