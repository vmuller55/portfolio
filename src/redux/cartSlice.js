import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Ajouter l'article à l'état du panier
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Supprimer l'article du panier en fonction de son ID par exemple
      return state.filter(item => item.id !== action.payload.id);
    },
    clearCart: () => {
      // Vider complètement le panier
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
