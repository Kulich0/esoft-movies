import React, { useState, useMemo } from 'react';
import Card from '../components/UI/Card/Card';
import SortSelect from '../components/UI/Select/SortSelect';
import FilterSelect from '../components/UI/Select/FilterSelect';
import useFilmData from '../hooks/useFilmData';
import Sidebar from '../components/UI/Sidebar/Sidebar';

const FirstPage = () => {
    const { films: allFilms } = useFilmData();
    const[selectedSort, setSelectedSort] = useState('');
    const[selectedFilter, setSelectedFilter] = useState('');
    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }
    
    const filterPosts = (filter) => {
        setSelectedFilter(filter);
    }
    
    const sortedAndFilteredFilms = useMemo(() => {
        let sortedFilms = [...allFilms];
        if (selectedSort === 'rating') {
            sortedFilms.sort((a, b) => a.rating - b.rating);
        }
        if (selectedFilter && selectedFilter !== 'Все') {
            sortedFilms = sortedFilms.filter(film => film.category === selectedFilter);
        }
        return sortedFilms;
    }, [allFilms, selectedSort, selectedFilter]);

    return (
        <div>
            <div>
                <SortSelect 
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                   {value: 'rating', name: 'По рейтингу'} 
                ]}
                />
            </div>
            <div>
                <FilterSelect
                value={selectedFilter}
                onChange={filterPosts}
                defaultValue='Фильтрация'
                options={[
                    {value: 'Все', name: 'Все фильмы'}, 
                    {value: 'Боевик', name : 'Боевик'},
                    {value: 'Криминал', name : 'Криминал'},
                    {value: 'Драма', name : 'Драма'},
                    {value: 'Приключения', name : 'Приключения'},
                ]}/>
                
            </div>
            {sortedAndFilteredFilms.map(post => (
                <Card post={post} key={post.id}/>
            ))}
            <Sidebar />
        </div>
    );
};

export default FirstPage;
