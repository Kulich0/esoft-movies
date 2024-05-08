import React, { useState } from 'react';
import MyButton from '../Button/MyButton';
const CommentForm = ({onCommentSubmit}) => {
    const[comment, setComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!comment.trim())
            return;
        onCommentSubmit({text: comment, author: 'Анонимный пользователь'});
        setComment('');
    }
    return (
        <form onSubmit={handleSubmit}>
           <textarea
           value={comment}
           onChange={(event) => setComment(event.target.value)}
           placeholder='Комментарий'
           /> 
           <MyButton type='sumbit'>Отправить</MyButton> 
        </form>
    );
};

export default CommentForm;