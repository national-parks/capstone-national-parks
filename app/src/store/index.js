import {getAllParks} from "parks"
import {getParkImagesByParkImageParkId} from "./parkImages"

import { combineReducers } from 'redux'

export default combineReducers({getAllParks, getParkImagesByParkImageParkId})
