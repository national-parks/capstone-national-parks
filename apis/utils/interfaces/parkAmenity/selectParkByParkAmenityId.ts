import {connect} from "../../src/database";

export async function selectParkByParkAmenityId(parkAmenityId: string) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkAmentiyId) as parkAmenityId, parkAmenityAmenityId FROM parkAmenity WHERE parkAmenityId = UUID_TO_BIN(:parkAmenityId)'

        const [rows] = await mysqlConnection.execute(mySqlQuery, {parkAmenityId})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}