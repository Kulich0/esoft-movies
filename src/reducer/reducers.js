const initialState = {
    favorites: [],
    later: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            const {movieId} = action.payload;
            const isFavorite = state.favorites.includes(movieId)
            if (isFavorite) {
                return {
                    ...state,
                    favorites: state.favorites.filter(id => id !== movieId),
                };
            }
            else {
                return{
                    ...state,
                favorites: [...state.favorites, movieId],
                };
            }
            case 'WATCH_IT_LATER':
                const {laterMovieId } = action.payload;
                const isLater = state.later.includes(laterMovieId)
                if (isLater) {
                    return {
                        ...state,
                        later: state.later.filter(id => id !== laterMovieId),
                    };
                }
                else {
                    return{
                        ...state,
                    later: [...state.later, laterMovieId],
                    };
                }
        default:
            return state;
    }
};

export default reducer;
