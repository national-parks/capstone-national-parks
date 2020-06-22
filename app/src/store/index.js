import {getAllParks} from "parks"
import {getParkImagesByParkImageParkId} from "./parkImages"
import {getCampgroundByCampgroundParkId} from "./campground"

import { combineReducers } from 'redux'

export default combineReducers({getAllParks, getParkImagesByParkImageParkId, getCampgroundByCampgroundParkId})
