import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const cartItems = createSelector([selectCart], cart => cart.cartItems);

export const numOfCartItems = createSelector([cartItems], cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));

export const cartTotal = createSelector([cartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
);
