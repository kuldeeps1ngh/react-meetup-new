import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHanlder(favoriteMeetup) {
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemsIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHanlder,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemsIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;