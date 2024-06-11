import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import axios from 'axios';
import CommentForm from '../components/UI/CommentForm/CommentForm';
import Sidebar from '../components/UI/Sidebar/Sidebar';

const DetailPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState([]);
    const[likeFilms, setLikeFilms] = useState([])
    const[commentData, setCommentData] = useState([])

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await axios.get(`/film.json`);
                const data = response.data;
                const filmData = data.find(film => film.id === parseInt(id));
                setFilm(filmData);
                if (filmData && filmData.category) {
                    const like = data.filter(item => item.category === filmData.category && item.id !== parseInt(id));
                    setLikeFilms(like)
                }
            } catch (error) {
                console.error('Ошибка при загрузке JSON', error);
            }
        };
        fetchFilm();
    }, [id]);
    
    const handleCommentSubmit = async (newCommentData) => {
        try {
            console.log('Новый комментарий:', newCommentData);
            setCommentData(prevComments => [...prevComments, newCommentData])
        } catch (error) {
            console.error('Ошибка при отправке комментария', error);
        }
    };

    return (
        <div> 
            <div>
                <h1>Название: {film.title}</h1>
                <div>Описание: {film.description}</div>
                <div>Актеры: {film.actors}</div>
                <div>Категория: {film.category}</div>
                <div>Рейтинг: {film.rating}</div>
            </div>
            <div>
                <h1>Похожие фильмы:</h1>
                {likeFilms.map(item => (
                    <Card post={item} key={item.id}/>
                ))}
            </div>
            <div>
                <CommentForm onCommentSubmit={handleCommentSubmit} commentData={commentData}/>
                {commentData.map((comment, index) => (
                    <div key={index}>{comment.text} - {comment.author}</div>
                ))}
            </div>
            <Sidebar/>
        </div>
    );
};

export default DetailPage;
