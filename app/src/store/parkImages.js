import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"

const slice = createSlice({
  name: "parkImages",
  initialState: [],
  reducers:  {
    getParkImagesByParkImageParkId : (parkImage, action) => {
      parkImage.push(action.payload)
    },
    getAllParkImages:(parkImages,action) => {
      return action.payload
    },
    getFiveRandomParkImages : (parkImages, action) => {
      return action.payload
    }
  }
})

export const {getParkImagesByParkImageParkId, getAllParkImages, getFiveRandomParkImages} = slice.actions

export const fetchParkImagesByParkImageParkId = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/`)
  dispatch(getParkImagesByParkImageParkId(data))
}

export const fetchAllParkImages= () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/`)
  dispatch(getAllParkImages(data))
}

export const fetchFiveRandomParkImages= () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/parkImage/getFive`)
  dispatch(getFiveRandomParkImages(data))
}

export default slice.reducer