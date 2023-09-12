import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateInterface {
  errors: string[],
}

const flowerSlice = createSlice({
  name: 'flowerSlice',
  initialState: { errors: [] } as InitialStateInterface,
  reducers: {
    setErrorState(state, errors: PayloadAction<string[]>) {
      state.errors = errors.payload;
    }
  },
});

export const { setErrorState } = flowerSlice.actions;
export default flowerSlice.reducer;
