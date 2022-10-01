import { createSlice } from "@reduxjs/toolkit"; 

export const profilesSlice = createSlice({
    name: "profiles",
    initialState: {
        profiles: []
    },
    reducers: {
        loadProfiles: (state, action) => {
            state.profiles = action.payload
        },
        addProfile: (state, action) => {
            state.profiles = [...state.profiles, action.payload]
        }
    }
});

export const { loadProfiles, addProfile } = profilesSlice.actions

export default profilesSlice.reducer