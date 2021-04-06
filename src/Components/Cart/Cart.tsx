import CartItem from ".././CartItem/CartItem";
//Interface
import { Products } from "../../Interfaces/Interfaces";

interface Props {
  cartItems: Products[];
   addToCart: (Item: Products) => void;
    removeFromCart: (id: number) => void;
}


const CartAll: React.FC<Props> = ({ cartItems, addToCart , removeFromCart}) => {
  const calculateTotal = (items: Products[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <div style={{width:"40rem"}}> 
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((Item) => (
        <CartItem Item={Item} addToCart={addToCart}  key={Item.id} removeFromCart={removeFromCart}/>
        
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  );
};

export default CartAll;
