import { Vinyl, Products } from "../Interfaces/Interfaces";

interface Props {
  Item:Vinyl
  addToCart:(clickedItem : Products)=>void;
}
const VinylItem: React.FC<Props> = ({Item,addToCart}) => {
  return <div>
    <img src={Item.img} alt=""/>
    <h3>{Item.artist}</h3>
    <h3>{Item.trackName}</h3>
    <h3>{Item.released}</h3>
    <p>{Item.price}</p>
    

  </div>;
};

export default VinylItem;
