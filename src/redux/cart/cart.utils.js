export const addItemToCart = (cartItems, addedCartItem) => {
  // find the cart item in the cart
  const itemInCart = cartItems.find(cartItem => cartItem.id === addedCartItem.id);

  // if a cart item is found increase the quantity
  if (itemInCart) {
    return cartItems.map(cartItem => {
      return cartItem.id === addedCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  }

  // if no cart item is found return cart plus
  return [...cartItems, { ...addedCartItem, quantity: 1 }];
};
