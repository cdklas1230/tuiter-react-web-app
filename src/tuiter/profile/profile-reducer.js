import { createSlice } from "@reduxjs/toolkit";
import profile from "./bio.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.pop(
                state.unshift({
                    ...action.payload,
                    _id: (new Date()).getTime(),
                })
            )
            console.log(action.payload);
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
