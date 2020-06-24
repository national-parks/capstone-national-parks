<<<<<<< HEAD
import {combineReducers} from 'redux'
import parks from "./parks"
import parkImages from "./parkImages"

export default combineReducers({parks, parkImages})
=======
import {getAllParks} from "parks"
import {getParkImagesByParkImageParkId} from "./parkImages"

import { combineReducers } from 'redux'

export default combineReducers({getAllParks, getParkImagesByParkImageParkId})
>>>>>>> john-proxy
