import React from 'react';
import './StyleSidebar.css'
import Card from '../../UI/Card/Card';
import useFilmData from '../../../hooks/useFilmData';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { films: allFilms } = useFilmData();
    const favorites = useSelector(state => state.favorites);
    const favoriteFilms = allFilms.filter(movie => favorites.includes(movie.id));
    const later = useSelector(state => state.later)
    const laterFilms = allFilms.filter(movie => later.includes(movie.id));
   
    return (
        <div className='sidebar'>
            <h1>Избранное: </h1>
            {favoriteFilms.map(film => (
                <Card post={film} key={film.id} />
            ))}
            <h1>Посмотреть позже:</h1>
            {laterFilms.map(film => (
                <Card post={film} key={film.if}/>
            ))}
        </div>
    );
};

export default Sidebar;
