
//Interface
import { Products } from "../../Interfaces/Interfaces";
//Styled Components
import styled from 'styled-components'


interface Props {
  Item: Products;
  addToCart: (Item: Products) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ Item, removeFromCart, addToCart }) => {
  console.log(Item);
  return (
    <ContainerItem>
      <h2 style={{marginTop:"2rem"}}>{Item.name}</h2>
      <ItemImg src={Item.img} alt={Item.name} />
      <div className="information">
        <p> <h2 style={{display:"inline"}}>Price:</h2> ${Item.price}</p>
        <p><h2 style={{display:"inline"}}>Total:</h2> ${(Item.amount * Item.price).toFixed(2)}</p>
      </div>

      <ButtonsAddRemove>
        <RemoveButton onClick={() => removeFromCart(Item.id)}>-</RemoveButton>
        <p>{Item.amount}</p>
        <AddButton onClick={() => addToCart(Item)}>+</AddButton>
      </ButtonsAddRemove>
    </ContainerItem>
  );
};

export default CartItem;

const ButtonsAddRemove = styled.div`
display:flex;
align-items:center;
margin-top:1rem;
`
const ContainerItem = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const ItemImg = styled.img`
width:12rem;
margin:2rem 0;
`
const AddButton = styled.button`
border:none;
padding:.2rem .5rem;
color:white;
border-radius:3px;
color:#2b8226;
margin:0 .4rem;
cursor: pointer;
font-size:1.5rem;
background-color:white;
font-weight:bold;
`
const RemoveButton= styled(AddButton)`
color:#804040;

`
