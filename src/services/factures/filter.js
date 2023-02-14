import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    filter: "Angular"
}

export const Filter = createSlice({
    name : "filter",
    initialState,
    reducers:{
        addFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const {addFilter} = Filter.actions

export default Filter.reducer