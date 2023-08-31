import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName : '',
    lastName : '',
    colorSelected : '',
    classSelected : '',
    created : false,
    gold : 150,
    inventory : []
  };
  
  const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
      updateCharacter: (state, action) => {
        const { option, value } = action.payload;
        state[option] = value;
      },
      addToInventory: (state, action) => {
        state.inventory.push(action.payload);
      },
      clearInventory: (state) => {
        state.inventory = []
      }
    },
  });
  
  export const { updateCharacter, addToInventory, clearInventory } = characterSlice.actions;
  
  export default characterSlice.reducer;