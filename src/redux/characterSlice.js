import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName : '',
    lastName : '',
    colorSelected : '',
    classSelected : '',
    created : false,
  };
  
  const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
      updateCharacter: (state, action) => {
        const { option, value } = action.payload;
        state[option] = value;
      },
    },
  });
  
  export const { updateCharacter } = characterSlice.actions;
  
  export default characterSlice.reducer;