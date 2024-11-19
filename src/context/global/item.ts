import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Slice untuk items (CRUD)
type Item = { id: string; name: string; description: string };

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string; description: string }>) => {
      const newItem: Item = { id: uuidv4(), ...action.payload };
      state.push(newItem);
    },
    updateItem: (state, action: PayloadAction<{ id: string; name: string; description: string }>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: false,
  reducers: {
    toggleSidebar: (state) => !state,
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const settingSlice = createSlice({
  name: 'setting',
  initialState: false,
  reducers: {
    toggleSetting: (state) => !state,
  },
});

export const { toggleSetting } = settingSlice.actions;