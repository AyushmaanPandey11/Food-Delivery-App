import { CAROUSEL_URL } from "../utils/constants";
const Foodcarousel = (props) => {
    const {itemsdata} = props;
    const {imageId} = itemsdata;
    const text = itemsdata?.text;
    return (
        <div className="Carousel-Card" >
            <img src={ CAROUSEL_URL + imageId } alt={text} /> 
        </div>
    );
};

export default Foodcarousel;