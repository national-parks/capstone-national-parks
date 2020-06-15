import {Park} from "../interfaces/park";
import {connect} from "../../src/database";

/**
 * Inserts a Like into mySQL
 *
 * @param {Park} Park object to be inserted into mySQL
 **/
export async function insertPark(Park: Park) {
    try {

        const mySqlConnection = await connect();

        const mySqlQuery = "INSERT INTO `park`(parkId) VALUES(UUID_TO_BIN(:parkId), UUID_TO_BIN(:parkId))";

        const [rows] = await mySqlConnection.execute(mySqlQuery, park)
        return

    } catch(error) {
        console.log(error)
    }
}