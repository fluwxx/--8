// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price } = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ id, name, price, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((item) => item.id === itemId);
            if (item) {
                item.quantity++;
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity } = counterSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectItemCount = (state) => state.cart.items.length;
