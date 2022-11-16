import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState:{
        details:{},
    },
    reducers: {
        addCharacter: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { addCharacter } = characterSlice.actions;

export const characterData = (state) => state.character;

export default characterSlice.reducer