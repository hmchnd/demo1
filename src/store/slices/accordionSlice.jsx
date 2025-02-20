import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOutcome: false,
    showResponsible: false,
    showPeriod: false,
};

const accordionSlice = createSlice({
    name: "accordion",
    initialState,
    reducers: {
        toggleOutcome: (state) => {
            state.showOutcome = !state.showOutcome;
        },
        toggleResponsible: (state) => {
            state.showResponsible = !state.showResponsible;
        },
        togglePeriod: (state) => {
            state.showPeriod = !state.showPeriod;
        }
    }
});

export const { toggleOutcome, toggleResponsible, togglePeriod } = accordionSlice.actions;
export default accordionSlice.reducer;
