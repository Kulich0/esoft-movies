import React, { useMemo, useState } from 'react';
import Card from '../components/UI/Card/Card';
import MyInput from '../components/UI/Input/MyInput';
import FilterSelect from '../components/UI/Select/FilterSelect';
import useFilmData from '../hooks/useFilmData';
import Sidebar from '../components/UI/Sidebar/Sidebar';

const SearchPage = () => {
  const { films: allFilms } = useFilmData();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filterPosts = (filter) => {
    setSelectedFilter(filter);
  };

  const searchedFilms = useMemo(() => {
    let filteredFilms = allFilms;
    if (selectedFilter && selectedFilter !== 'Все') {
      filteredFilms = filteredFilms.filter((film) => film.category === selectedFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredFilms = filteredFilms.filter((film) => film.title.toLowerCase().includes(query));
    }

    return filteredFilms;
  }, [allFilms, selectedFilter, searchQuery]);

  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FilterSelect
        value={selectedFilter}
        onChange={filterPosts}
        defaultValue="Фильтрация"
        options={[
          {value: 'Все', name: 'Все фильмы'}, 
          {value: 'Боевик', name: 'Боевик'},
          {value: 'Криминал', name: 'Криминал'},
          {value: 'Драма', name: 'Драма'},
          {value: 'Приключения', name: 'Приключения'},
        ]}
      />
      {
        searchedFilms.map((film) => (
          <Card post={film} key={film.id} />
        ))
      }
      <Sidebar/>
    </div>
  );
};

export default SearchPage;
