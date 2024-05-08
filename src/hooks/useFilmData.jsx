import { useEffect, useState } from 'react';
import axios from 'axios';

const useFilmData = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('/film.json');
        const data = response.data;
        setFilms(data);
        
      } catch (error) {
        console.error('Ошибка при загрузке JSON', error);
        
      }
    };
    fetchFilms();
  }, []);

  return { films };
};

export default useFilmData;
