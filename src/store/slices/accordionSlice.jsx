import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOutcome: true,
    showResponsible: true,
    showPeriod: true,
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
