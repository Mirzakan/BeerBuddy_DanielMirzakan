
import ShowImages from "../components/ShowImages";
import { inputTerm, fetch } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import useFetchImage from "../utils/hooks/useFetchImage"
import { Button } from 'react-bootstrap';

export default function BrowsePage(){

    const pageReducer = useSelector(state => state.pageReducer);
    const inputState = useSelector(state => state.searchReducer);
    const isClicked = useSelector(state => state.isClickedReducer);
    const [images, setImages] = useFetchImage(pageReducer, inputState, isClicked);
    const dispatch = useDispatch();

	function userInput(e) {
        const text = e.target.value;
        clearTimeout(window.timeout);
        
		window.timeout = setTimeout(() => {
			dispatch(inputTerm(text));
		}, 1000)
    } 
    
    return(
        
        <div className="App">
            <div className="BrowsePage">
                <label>Food Pairing</label>
                <input type="text" onChange={userInput} className="w-full border rounded shadow" />
                <Button variant="dark" onClick={() => dispatch(fetch())}> Search </Button>
            </div>
            <div>
                <ShowImages images={images} />
            </div>       
        </div>
    );
}
