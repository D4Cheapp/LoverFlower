import { createSlice } from '@reduxjs/toolkit';

const flowerSlice = createSlice({
  name: 'flowerSlice',
  initialState: { cart: [], isCartMenuActive: false },
  reducers: {
    setCartMenuState(state, isCartMenuActive: { payload: boolean }): void {
      document.body.style.overflowY = isCartMenuActive.payload
        ? 'hidden'
        : 'scroll';
      state.isCartMenuActive = isCartMenuActive.payload;
    },
  },
});

export const { setCartMenuState } = flowerSlice.actions;
export default flowerSlice.reducer;
