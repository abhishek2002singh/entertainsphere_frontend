import { createSlice } from "@reduxjs/toolkit";
const appSlice=createSlice({

    name:"app",
    initialState:{
        isMenuOpen:false,
    },
    reducers:{
        toggleMenus:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },

       
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
    },
});
export const {toggleMenus,closeMenu}=appSlice.actions;
export default appSlice.reducer;