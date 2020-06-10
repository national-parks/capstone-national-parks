import {Campground} from "../interfaces/campground";
import {connect} from "../../src/database";

export async function selectCampgroundByCampgroundId(campgroundId : string){
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT UNHEX(campgroundId), campgroundParkId, campgroundAccessibility, campgroundName FROM campground WHERE campgroundId = (:campgroundId)';

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {campgroundId});

        return rows
    } catch (error) {
        console.log(error);
        return undefined
    }
}

selectCampgroundByCampgroundId("Id");