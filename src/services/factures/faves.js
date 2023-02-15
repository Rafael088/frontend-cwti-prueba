import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    faves: []
}

export const Faves = createSlice({
    name : "faves",
    initialState,
    reducers:{
        addFaves: (state, action) => {
            state.faves.push(action.payload)
        },
        addFavesAll: (state, action) => {
            state.faves = action.payload
        }
    }
})

export const {addFaves, addFavesAll} = Faves.actions

export default Faves.reducer