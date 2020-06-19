import axios from "axios"
import {insertPark} from "../park/insertPark";
import {Park} from  "../interfaces/park";
import {v1 as uuidv1} from "uuid"
import {ParkImage} from "../interfaces/parkImage";
import {insertParkImage} from "../parkImage/insertParkImage";

function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadParks()

        } catch (error) {
            console.log(error)
        }
    }

    async function downloadParks() {
        try {
            let parkData = [];

            for (let j = 1; j < 497; j=j+50) {
                const {data} = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=&start=${j}&api_key=${process.env.NPS_API_KEY}`);

                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i].designation === 'National Park') {
                        let parkList = data.data[i];
                        // parkData.push({
                        //     "contacts": park.contacts,
                        //     "states": park.states,
                        //     "activities": park.activities,
                        //     "description": park.description,
                        //     "images": park.images,
                        //     "designation": park.designation,
                        //     "parkCode": park.parkCode,
                        //     "fullName": park.fullName
                        // })
                    console.log("description length",parkList.description.length)
                        console.log("description",parkList.description)
                        const park: Park={parkId: uuidv1(), parkContact: parkList.contacts.phoneNumbers[0].phoneNumber, parkDescription: parkList.description, parkFullName: parkList.fullName, parkState: parkList.states[0], parkOperatingHours: parkList.operatingHours[0].description}
                        const result = await insertPark(park)

                        for (let parkImage of parkList.images) {
                            const newParkImage : ParkImage = {parkImageId: null, parkImageParkId: park.parkId as string, parkImageCaption: parkImage.altText, parkImageUrl: parkImage.url}
                            console.log(newParkImage)
                            await insertParkImage(newParkImage)
                        }
                    }
                }
            }

        } catch (error) {
            console.error(error.message)
        }
    }
}

dataDownloader().catch(error => console.error(error))