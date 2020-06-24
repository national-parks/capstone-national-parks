import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"
import { getParkImagesByParkImageParkId } from './parkImages'

const slice = createSlice({
  name: "parks",
  initialState: [],
  reducers:  {
    getParkByParkId : (park, action) => {
      return action.payload
    },
    getAllParks : (parks, action) => {
      return action.payload
    }
  }
})

export const {getAllParks, getParkByParkId} = slice.actions

export const fetchParkByParkId = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/park/`)
  dispatch(getParkByParkId(data))
}

export const fetchAllParks = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/park/`)
  dispatch(getAllParks(data))
}

export default slice.reducer