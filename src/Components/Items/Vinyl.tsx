//Interfaces
import { Vinyl , Products } from "../../Interfaces/Interfaces";
//Materia UI
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//Style
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../../Style/Style";
import SoundCloud from '../../img/soundcloud.png'
interface Props {
  Item: Vinyl;
  addToCart:(clickedItem : Products)=>void;
  openCart:(openCart:boolean)=>void;
}
const VinylItem: React.FC<Props> = ({ Item , addToCart, openCart}) => {

  return (
    <ItemsContainer>
      <img src={Item.img} alt="" />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <h2>{Item.artist}</h2>
      <a href={Item.link}> <img style={{width:"1.6rem"}} src={SoundCloud} alt=""/></a> 
      </div>
      <h2>{Item.trackName}</h2>
      <h2>{Item.released}</h2>
       
      <BuySection className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle  onClick={() => {addToCart(Item) ; openCart(true)}}>
            <ShoppingCartOutlinedIcon fontSize="small"></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
  );
};

export default VinylItem;
