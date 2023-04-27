import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchRandomColor } from "./canvasAPI";

const initialState = {
    color: {
        code: "#000000",
        status: "compelete"
    },
    font: {
        size: 16
    },
    text: {
        style: '"Cabin", sans-serif'
    },
    opacity: {
        value: 0.5
    }
}

export const canvaSlice = createSlice({
    name: "canvas",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color.code = action.payload;
        },
        changeFont: (state, action) => {
            state.font.size = action.payload;
        },
        changeTextStyle: (state, action) => {
            state.text.style = action.payload
        },
        changeOpacity: (state, action) => {
            state.opacity.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(paintColorAsync.pending, (state) => {
            state.color.status = "Loading"
        })
        builder.addCase(paintColorAsync.fulfilled,(state,action)=>{
            state.color.status="compelete";
            state.color.code=action.payload
        })
    }
});

export const paintColorAsync = createAsyncThunk(
    'canvas/fetchRandomColor',
    async () => {
        const response = await fetchRandomColor();
        return response.data;
    }
);

export const selectColor = (state) => state.canvas.color.code;
export const selectFont = (state) => state.canvas.font.size;
export const selectOpacity = (state) => state.canvas.opacity.value
export const selectText = (state) => state.canvas.text.style
export const selectColorStatus=(state)=>state.canvas.color.status

export const { changeColor, changeFont, changeOpacity, changeTextStyle } = canvaSlice.actions;
export default canvaSlice.reducer;