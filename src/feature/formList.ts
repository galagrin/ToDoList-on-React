import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
    text: string;
}

const initialState: FormState = {
    text: '',
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        clearText: (state) => {
            state.text = '';
        },
    },
});

export const { setText, clearText } = formSlice.actions;

export default formSlice.reducer;
