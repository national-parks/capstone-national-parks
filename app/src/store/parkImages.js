import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"

const slice = createSlice({
  name: "parkImages",
  initialState: [],
  reducers:  {
    getParkImagesByParkImageParkId : (parkImages, action) => {
      parkImages.push(action.payload)
    }
  }
})

export const {getParkImagesByParkImageParkId} = slice.actions

export const fetchParkImagesByParkImageParkId = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/`)
  dispatch(getParkImagesByParkImageParkId(data))
}

export default slice.reducer