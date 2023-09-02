import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    borderRadius: 0,
    hasBorder: false,
    borderColor: 0,
    borderWidth: 1,
    fontSize: 16,
    hasBoxShadow: false,
    shadowX: 1,
    shadowY: 1,
    shadowBlur: 10,
    shadowColor: 0,
    editableContent: "J'ai commencé par apprendre le HTML, le CSS et les animations.",
    showCode: false,
  };
  
  const stylingOptionsSlice = createSlice({
    name: 'stylingOptions',
    initialState,
    reducers: {
      updateStyleOption: (state, action) => {
        const { option, value } = action.payload;
        state[option] = value;
      },
    },
  });
  
  export const { updateStyleOption } = stylingOptionsSlice.actions;
  
  export default stylingOptionsSlice.reducer;