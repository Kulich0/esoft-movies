import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../../reducer/actions';
import { watchItLater } from '../../../reducer/actions';
import MyButton from '../Button/MyButton';

const MovieItem = ({ movieId , laterMovieId}) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.includes(movieId);
    const later = useSelector(state => state.later)
    const isLater = later.includes(laterMovieId)

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(movieId));
    };
    const handleWatchItLater = () => {
        dispatch(watchItLater(laterMovieId));
    };

    return (
        <div>
            <MyButton onClick={handleAddToFavorites}>
                {isFavorite ? '★' : '☆'}
            </MyButton>
            <MyButton onClick={handleWatchItLater}>
                {isLater ? '⌛' : '⏳'}
            </MyButton>
        </div>
    );
};

export default MovieItem;

