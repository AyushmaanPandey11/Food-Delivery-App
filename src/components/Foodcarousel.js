import { CAROUSEL_URL } from "../utils/constants";
const Foodcarousel = (props) => {
    const {itemsdata} = props;
    const {imageId} = itemsdata;
    const text = itemsdata?.text;
    return (
        <div data-testid="carousel" className="w-[150px] h-[150px] my-5" >
            <img src={ CAROUSEL_URL + imageId } alt={text} /> 
        </div>
    );
};

export default Foodcarousel;