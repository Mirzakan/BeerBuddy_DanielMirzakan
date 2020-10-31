
import ShowImages from "../components/ShowImages";
import { useSelector, useDispatch } from 'react-redux';
import useFetchImage from "../utils/hooks/useFetchImage"

export default function FavoritePage(){

    const pageReducer = useSelector(state => state.pageReducer);
    const [images, setImages] = useFetchImage(pageReducer, "", 0);

    return(
        
        <div className="App">
            <div>
                <ShowImages images={images} />
            </div>          
        </div>
    );
}