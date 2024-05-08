export const addToFavorites = (movieId) => ({
    type: 'ADD_TO_FAVORITES',
    payload: { movieId },
});

export const watchItLater = (laterMovieId ) => ({
    type: 'WATCH_IT_LATER',
    payload: { laterMovieId  },
});