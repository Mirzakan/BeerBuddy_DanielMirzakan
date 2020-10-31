import React, { useEffect, useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Image(props) {
	
	const [showModal, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const isClicked = useSelector(state => state.isClickedReducer);
	const location = useLocation();
	const [rateNum, setRateNum] = useState(props.attributes.rate);

	const [rate, setRate] = useState({
		init: false,
		value: localStorage.getItem(props.attributes.id) ? 1 : 0,
	});

	const card = {
		id: -1,
		image_url: "",
		name: "",
		description: "",
		first_brewed: "",
		ph: "",
		like: false,
		rate: 0
	}

	// saving new record on local storage after user rates via dropdown list
	function saveRate(e){
		if(localStorage.getItem(props.attributes.id)){
			localStorage.removeItem(props.attributes.id)  
		}
		
		card.id = props.attributes.id;
		card.image_url = props.attributes.image_url;
		card.name = props.attributes.name;
		card.description = props.attributes.description;
		card.first_brewed = props.attributes.first_brewed;
		card.ph = props.attributes.ph;
		card.like = true;
		card.rate = e.target.value
		localStorage.setItem(props.attributes.id, JSON.stringify(card))
		setRateNum(e.target.value)
	};

	useEffect(( )=> {	

		// prevent first initialization 
		if ( rate.init == 0) return;

		// add to favorite
		if ( rate.value == 1) {
			
			card.id = props.attributes.id;
			card.image_url = props.attributes.image_url;
			card.name = props.attributes.name;
			card.description = props.attributes.description;
			card.first_brewed = props.attributes.first_brewed;
			card.ph = props.attributes.ph;
			card.like = true;
			card.rate = 1;
			localStorage.setItem(props.id, JSON.stringify(card));

		} else {
			console.log("remove: " + props.attributes.id);
			localStorage.removeItem(props.attributes.id);
		}
		
	},[rate.value, isClicked])

	return (
		<>
			<Link to="#" className="bootCard" variant="primary" >
				<Card>
					<StarRatings
						rating={ rate.value }
						starRatedColor="red"
						changeRating={() => {
							console.log("??????????????????")
							rate.init = true;
							rate.value = (rate.value + 1) % 2;
							setRate(rate);
						}}
						numberOfStars={1}
						name='rating'
						starDimension="25px"
						starSpacing="0px"
					/>
					{ location.pathname == '/favorite_beers' && ([			
						<span key={props.attributes.id} >Rank:</span>,
						<select key={props.attributes.id + 1} value={ rateNum } onChange={saveRate} style={{width: '15%'}}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>	
					])}
					<Card.Img onClick={handleShow} className="img box" variant="top" src={`${props.attributes.image_url}` } />
					<Card.Body>
						<Card.Title>{props.attributes.name}</Card.Title>
					</Card.Body>
				</Card>
			</Link>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title><b>{props.attributes.name}</b></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card>
						{ location.pathname == '/favorite_beers' && ([			
							<span key={props.attributes.id}>Rank:</span>,
							<select key={props.attributes.id + 1} value={ rateNum } onChange={saveRate} style={{width: '15%'}}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>	
						])}
						<Card.Img className="img box" variant="top" src={`${props.attributes.image_url}` } />
						<Card.Body>
							<Card.Text><b>Description:</b> {props.attributes.description}</Card.Text>
							<Card.Text><b>First Brewed:</b> {props.attributes.first_brewed}</Card.Text>
							<Card.Text><b>pH Level:</b> {props.attributes.ph}</Card.Text>
						</Card.Body>
					</Card>				
				</Modal.Body>
			</Modal>
		</>
	);
}

