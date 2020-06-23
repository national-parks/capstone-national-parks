import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"

const slice = createSlice({
  name: "parkImages",
  initialState: [],
  reducers:  {
    getParkImagesByParkImageParkId : (parkImages, action) => {
      parkImages.push(action.payload)
    },
    getAllParkImages:(parkImages,action) => {
      return action.payload
    }
  }
})

export const {getParkImagesByParkImageParkId, getAllParkImages} = slice.actions

export const fetchParkImagesByParkImageParkId = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/`)
  dispatch(getParkImagesByParkImageParkId(data))
}

export const fetchAllParkImages= () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/`)
  dispatch(getAllParkImages(data))
}
export default slice.reducer