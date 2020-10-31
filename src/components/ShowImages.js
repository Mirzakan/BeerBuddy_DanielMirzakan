import React, { useState } from 'react'
import Image from "./Image"
import InfiniteScroll from 'react-infinite-scroll-component';
import { nextPage } from '../actions';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

// Show componenet for img visualization    
export default function ShowImages({ images }) {

  const location = useLocation();
  const dispatch = useDispatch();

	return (
    <>
      { images.length > 0 && location.pathname == '/' && (

            <InfiniteScroll
              dataLength={images.length}
              next={() => dispatch(nextPage())}
              hasMore = {true}>

              { images.map((img,index) => (
                  <Image
                    image={ img.image_url }
                    id={ img.id }
                    attributes={img}
                    key = { index }
                  />
                ))
              }
            </InfiniteScroll>                                        
          )      
      }

      { images.length > 0 && location.pathname == '/favorite_beers' && (
        
            <InfiniteScroll
            dataLength={images.length}
            next={() => dispatch(nextPage())}
            hasMore = {true}>
            
            { Object.keys(localStorage).map(key => 
                <Image
                  attributes ={ JSON.parse(localStorage.getItem(key)) }
                  key = { key }
                />
              )
            }
          </InfiniteScroll>                        
        )      
      }

    </>
	)	
}


