import { Products } from "../../Interfaces/Interfaces";

interface Props {
  Item: Products;
  addToCart:(Item : Products)=>void;
   removeFromCart:(id:number)=>void;
}

const CartItem: React.FC<Props> = ({ Item }) => {
  console.log(Item);
  return (
    <div>
      <h3>{Item.name}</h3>
      <img src={Item.img} alt={Item.name}/>
      <div className='information'>
        <p>Price: ${Item.price}</p>
        <p>Total: ${(Item.amount * Item.price).toFixed(2)}</p>
      </div>
      <p>{Item.amount}</p>

    </div>
  );
};

export default CartItem;
