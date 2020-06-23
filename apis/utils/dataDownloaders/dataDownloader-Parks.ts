import axios from "axios"
import {insertPark} from "../park/insertPark";
import {Park} from "../interfaces/park";
import {v1 as uuidv1} from "uuid"
import {ParkImage} from "../interfaces/parkImage";
import {insertParkImage} from "../parkImage/insertParkImage";

function dataDownloader(): Promise<any> {
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
            let parkData: Park[] = [];
            let parkImageData: ParkImage[] = []


            for (let j = 1; j < 497; j = j + 50) {
                const {data} = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=&start=${j}&api_key=${process.env.NPS_API_KEY}`);
                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i].designation.trim() === 'National Park' || data.data[i].designation.trim() === 'National Park & Preserve') {
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
                        // console.log("description length", parkList.description.length)
                        // console.log("description", parkList.description)
                        console.log("STATES", parkList.states)
                        const park: Park = {
                            parkId: uuidv1(),
                            parkContact: parkList.contacts.phoneNumbers[0].phoneNumber,
                            parkDescription: parkList.description,
                            parkFullName: parkList.fullName,
                            parkState: parkList.states.substring(0,2),
                            parkOperatingHours: parkList.operatingHours[0].description
                        }
                        parkData.push(park)
                        for (let parkImage of parkList.images) {
                            const newParkImage: ParkImage = {
                                parkImageId: null,
                                parkImageParkId: park.parkId as string,
                                parkImageCaption: parkImage.altText,
                                parkImageUrl: parkImage.url
                            }
                            // console.log(newParkImage)
                            parkImageData.push(newParkImage)

                        }
                    }
                }
            }
            const result = await insertPark(parkData)
            // console.log("WE ARE HERE", result)
            const result2 = await insertParkImage(parkImageData)
            console.log("NO FRICKEN WAY", result2)

        } catch (error) {
            console.error("main data download error",error.message)
        }
    }
}

dataDownloader()
    .then(reply => {console.log("All Finished")})
    .catch(error => console.error(error))