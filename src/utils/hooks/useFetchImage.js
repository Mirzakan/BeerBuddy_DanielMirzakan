import React, {useState, useEffect} from 'react'
import Axios from "axios";

//Custom hook - fetch data from punkAPI
export default function useFetchImage( page, searchTerm, isClicked) {

    const url = "https://api.punkapi.com/v2/beers?per_page=12&";
    const api = searchTerm != ""  ? `${url}&food=${searchTerm}` : `${url}page=${page}`;
	const [images, setImages] = useState([]);

	useEffect(() => { 

		Axios.get(

		 `${api}`

		 ).then((res) => {

            if(searchTerm != "" ){
                setImages([...res.data]);

            } else { 
                setImages([...images,...res.data]);
            }
		 })
		  .catch((e) => {
            console.log("ERR: " + e);
		  });

    },[page, isClicked])

	return [images, setImages];
}