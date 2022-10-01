import { createSlice } from "@reduxjs/toolkit"; 

export const loggerSlice = createSlice({
    name: 'logger',
    initialState: {
        isLogged: false
    },
    reducers:{
        logIn: (state) => {
            state.isLogged = true
        },
        logOut: (state) => {
            state.isLogged = false
        }
    }
})

export const { logIn, logOut } = loggerSlice.actions

export default loggerSlice.reducer