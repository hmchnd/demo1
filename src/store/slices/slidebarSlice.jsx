import { createSlice } from '@reduxjs/toolkit'
export const slidebarSlice = createSlice({
    name: "slidebarSlice",
    initialState: { isOpen: false },
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})
export const { toggleSidebar } = slidebarSlice.actions
export default slidebarSlice.reducer