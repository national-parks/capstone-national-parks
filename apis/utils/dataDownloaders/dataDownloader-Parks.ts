import axios from "axios"

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
                        let park = data.data[i];
                        parkData.push({
                            "contacts": park.contacts,
                            "states": park.states,
                            "activities": park.activities,
                            "description": park.description,
                            "images": park.images,
                            "designation": park.designation,
                            "parkCode": park.parkCode,
                            "fullName": park.fullName
                        })
                    }
                }
            }

            return parkData

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))