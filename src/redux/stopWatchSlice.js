import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

export const StopWatchSlice = createSlice({
  name: 'stopWatchList',
  initialState,
  reducers: {
    updateItems(state, { payload }) {
      state.items = [payload, ...state.items];
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(item => {
        return item.id !== payload;
      });
    },
  },
});

const persistConfig = {
  key: 'stopWatchList',
  storage,
  whitelist: ['items'],
};

export const itemsReducer = persistReducer(
  persistConfig,
  StopWatchSlice.reducer
);

export const { updateItems, removeItem, updateValue } = StopWatchSlice.actions;

// Selectors
export const getItems = state => state.stopWatchList.items;
export const getValues = state => state.stopWatchList.values;
