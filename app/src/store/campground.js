import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../lib/http-config"

const slice = createSlice({
	name: "campgrounds",
	initialState: [],
	reducers:  {
		getCampgroundByCampgroundParkId : (campgrounds, action) => {
			return action.payload
		}
	}
})

export const {getCampgroundByCampgroundParkId} = slice.actions