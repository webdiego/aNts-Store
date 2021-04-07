//Components
import CartItem from ".././CartItem/CartItem";
//Interface
import { Products } from "../../Interfaces/Interfaces";
//Styled Components
import styled from 'styled-components'


interface Props {
  cartItems: Products[];
  addToCart: (Item: Products) => void;
  removeFromCart: (id: number) => void;
}

const CartAll: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: Products[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <ContainerCart>
      <TitleCart>Your Shopping Cart</TitleCart>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((Item) => (
        <CartItem Item={Item} addToCart={addToCart} key={Item.id} removeFromCart={removeFromCart} />
      ))}
      <TitleCart>Total: ${calculateTotal(cartItems).toFixed(2)}</TitleCart>
    </ContainerCart>
  );
};

export default CartAll;

const ContainerCart = styled.div`
width:30rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 1000px) {
    width:16rem;
  }

`
const TitleCart = styled.h1`
text-align:center;
margin-top:1rem;
@media (max-width: 1000px) {
    font-size:1.2rem;
    
  }
`