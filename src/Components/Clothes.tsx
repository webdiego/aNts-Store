import { Cloth, Products } from "../Interfaces/Interfaces";

interface Props {
  Item: Cloth;
  addToCart: (clickedItem: Products) => void;
}

const ClothesItem: React.FC<Props> = ({ Item, addToCart }) => {
  return (
    <div>
      <img src={Item.img.front} alt={Item.name} />
      <img src={Item.img.back} alt={Item.name} />
      <h1>{Item.name}</h1>
      <h1>{Item.color}</h1>
      <h1>{Item.price}</h1>
      <button onClick={() => addToCart}>Add to cart</button>
    </div>
  );
};

export default ClothesItem;
