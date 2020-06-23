import {Campground} from "../interfaces/campground";
import {connect} from "../../src/database";

export async function selectCampgroundByCampgroundParkCode(campgroundParkCode : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(campgroundId) AS campgroundId, campgroundParkId, campgroundName, campgroundParkCode FROM campground WHERE campgroundParkCode = (:campgroundParkCode)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {campgroundParkCode});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectCampgroundByCampgroundParkCode("Park Code");