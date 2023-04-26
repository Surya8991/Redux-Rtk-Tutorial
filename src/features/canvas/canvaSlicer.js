import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: {
        code: "#000000"
    },
    font: {
        size: 16
    },
    text:{
        style:'"Cabin", sans-serif'
    },
    opacity:{
        value:0.5
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
        changeTextStyle:(state,action)=>{
            state.text.style=action.payload
        },
        changeOpacity:(state,action)=>{
            state.opacity.value=action.payload
        }
    }
});

export const selectColor = (state) => state.canvas.color.code;
export const selectFont = (state) => state.canvas.font.size;
export const selectOpacity=(state)=>state.canvas.opacity.value
export const selectText=(state)=>state.canvas.text.style

export const {changeColor,changeFont,changeOpacity,changeTextStyle}=canvaSlice.actions;
export default canvaSlice.reducer;