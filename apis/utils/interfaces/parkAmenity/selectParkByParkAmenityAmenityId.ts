import {connect} from "../../src/database";

export async function selectParkByParkAmenityAmenityId(parkAmenityAmenityId: string) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(parkAmenityAmenityId) as parkAmenityId, parkAmenityAmenityId FROM parkAmenity WHERE parkAmenityAmenityId = UUID_TO_BIN(:parkAmenityAmenityId )'

        const [rows] = await mysqlConnection.execute(mySqlQuery, {parkAmenityAmenityId})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}