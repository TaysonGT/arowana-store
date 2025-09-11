import React, { createContext, useContext, useState, useEffect } from 'react';

interface ICartContext{
    cartItems: any[];
    addToCart: (item: any) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
    editItemQuantity: (itemId: number, quantity:number) => void;
    total: number;
    isInCart: (itemId:number)=>boolean
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const cartAction = (items:any[])=>{
    setTotal(items.reduce((total, item) => total + item.price * item.quantity, 0))
    localStorage.setItem("cartItems", JSON.stringify(items));
  }

  const addToCart = (item: any) => {
      setCartItems((prevItems) => {
      const existingItem = prevItems.some((i) => i.id === item.id);
          if (existingItem) {
              return prevItems.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              );
          } 
          const newItems = [...prevItems, { ...item, quantity: item.quantity }];
          cartAction(newItems)
          return newItems
      });
  }

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId)
      cartAction(newItems)
      return newItems
    });
  }

  const clearCart = () => {
    setCartItems([]);
    cartAction([])
    localStorage.removeItem("cartItems");
  }

  const isInCart = (itemId:number)=>{
    return cartItems.some(item=>item.id===itemId)
  }

  const editItemQuantity = (itemId: number, quantity:number) => {
      quantity = Math.max(1, quantity);
      setCartItems((prevItems) =>{
        const newItems = prevItems.map((item) => 
            item.id === itemId ? { ...item, quantity } : item
        )
        cartAction(newItems)
        return newItems;
      });
  }
  
  useEffect(()=>{
    const items = localStorage.getItem("cartItems");
    const parsedItems:any[] = items ? JSON.parse(items) : []
    setCartItems(parsedItems);
    setTotal(parsedItems.reduce((total, item) => total + item.price * item.quantity, 0))
  },[])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        editItemQuantity,
        total,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

