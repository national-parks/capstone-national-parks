import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"

const slice = createSlice({
  name: "parks",
  initialState: [],
  reducers:  {
    getAllParks : (parks, action) => {
      return action.payload
    }
  }
})

export const {getAllParks} = slice.actions

export const fetchAllParks = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/park/`)
  dispatch(getAllParks(data))
}

export default slice.reducer