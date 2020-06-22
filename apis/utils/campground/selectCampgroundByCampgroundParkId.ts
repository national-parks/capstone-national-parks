import {Campground} from "../interfaces/campground";
import {connect} from "../../src/database";

export async function selectCampgroundByCampgroundParkId(campgroundParkId : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(campgroundId) AS campgroundId, BIN_TO_UUID(campgroundParkId) AS campgroundParkId, campgroundAccessibility, campgroundName FROM campground WHERE campgroundParkId = (:campgroundParkId)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {campgroundParkId});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectCampgroundByCampgroundParkId("ParkId");