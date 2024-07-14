import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
        color: '',
    },
    reducers: {
        setNameFilter(state, action) {
            state.name = action.payload;
        },
        setColorFilter(state, action) {
            state.color = action.payload;
        },
    },
});

export const { setNameFilter, setColorFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
