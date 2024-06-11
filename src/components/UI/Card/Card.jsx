import React from 'react';
import './StyleCard.css'
import { Link } from 'react-router-dom'; 
import MovieItem from '../MovieItem/MovieItem';

const Card = (props) => {
    return (
        <div className='container'>			
			<div className='contentContainer'>
            <Link to={`/films/${props.post.id}`}>
                <h1>{props.post.title}</h1>
            </Link>
                <div className='card-description'>{props.post.description}</div>
                <div>{props.post.actors}</div>
                <div>{props.post.category}</div>
                <div>{props.post.rating}</div>
            </div> 
            <MovieItem movieId={props.post.id} laterMovieId={props.post.id}/>
        </div>
    );
};

export default Card;

