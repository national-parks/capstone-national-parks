import axios from "axios"
import {v1 as uuidv1} from "uuid"

import {Park} from "../interfaces/park";
import {selectAllParks} from "../park/selectAllParks";

import {Campground} from "../interfaces/campground";
import {insertCampground} from "../campground/insertCampground";


function dataDownloader(): Promise<any> {
    return main()

    async function main() {
        try {
            await downloadCampgrounds()

        } catch (error) {
            console.log(error)
        }
    }

    async function downloadCampgrounds() {
        try {
            let campgroundData: Campground[] = [];

            // Get all parks
            const allParks : any = await selectAllParks();

            allParks.foreach(async function (park : Park) {
                const {campgroundData} = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${park.parkParkCode}&api_key=${process.env.NPS_API_KEY}`);

                // If campgroundData has length in object (has at least 1 campground), save campground information to database
                if (campgroundData.length > 0) {
                    for (let k = 0; k < campgroundData.data.length; k++) {
                        const campground: Campground = {
                            campgroundId: uuidv1(),
                            campgroundParkId: park.parkId,
                            campgroundParkCode: campgroundData.parkCode,
                            campgroundName: campgroundData.name,
                        }
                        campgroundData.push(campground)
                    }
                }
            })

            const result = await insertCampground(campgroundData)

        } catch (error) {
            console.error("main data download error",error.message)
        }
    }
}

dataDownloader()
    .then(reply => {console.log("All Finished")})
    .catch(error => console.error(error))