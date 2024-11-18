// src/store.ts
import { configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { counterSlice, decrement, increment, incrementByAmount } from './global/counter';
import { addItem, deleteItem, itemsSlice, sidebarSlice, updateItem } from './global/item';
import { login, logout, sessionSlice } from './global/session';
import { useNavigate } from 'react-router-dom';

// Ekspor actions dan reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    item: itemsSlice.reducer,
    session: sessionSlice.reducer,
    sidebar: sidebarSlice.reducer
  },
});

// Types untuk RootState dan AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook untuk counter actions yang otomatis dispatch
export const useCounterActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
  };
};

export const useItemsActions = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    return {
      addItem: (name: string, description: string) => dispatch(addItem({ name, description })),
      updateItem: (id: string, name: string, description: string) => dispatch(updateItem({ id, name, description })),
      deleteItem: (id: string) => dispatch(deleteItem(id)),
      toggleSidebar: () => dispatch(sidebarSlice.actions.toggleSidebar()),
    };
};

export const useSession = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return {
    login: () => {
      dispatch(login())
      navigate('/')
    },
    logout: () => {
      dispatch(logout())
      navigate('/login')
    },
  };
};

export default store;